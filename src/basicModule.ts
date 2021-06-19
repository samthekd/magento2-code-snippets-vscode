import { Uri, window, workspace } from 'vscode';
import * as fs from 'fs';
import { str2ab } from './str2ab';
import { moduleXml } from './templates/module.xml';
import { registrationPhp } from './templates/registration.php';

export async function basicModule() {
    let modulePath = '';

    if(workspace.workspaceFolders !== undefined) {
        modulePath = workspace.workspaceFolders[0].uri.fsPath;
    }
    
	const moduleName = await window.showInputBox({
		value: 'Vendor_Module',
		placeHolder: 'For example: Vendor and Module Name'
	});
    if (moduleName !== undefined) {
        let moduleDir = getModuleBasePath();

        if (moduleName !== undefined) {
            createModuleXmlFile(moduleDir, moduleName);
            createModuleRegistrationFile(moduleDir, moduleName);
        }
    } else {
        window.showInformationMessage(`Invalid Input`);
    }

    function getModuleBasePath() {
        return '\\'+modulePath;
    }

    function createModuleXmlFile(moduleDir:string, moduleName:string) {

        let moduleXmlTemplate = getModuleXmlTemplate();

        moduleXmlTemplate  = moduleXmlTemplate .replace('%moduleName%', moduleName);

        let moduleEtcDir = moduleDir+'\\etc';

        let moduleEtcDirUri = Uri.file(moduleEtcDir);

        if (!fs.existsSync(moduleEtcDir)) {
            workspace.fs.createDirectory(moduleEtcDirUri);
        }
        let moduleXmlFile = moduleEtcDir + '\\module.xml';
        let moduleXmlFileUri = Uri.file(moduleXmlFile);
        
        var uint8array = new Uint8Array(str2ab(moduleXmlTemplate));
        workspace.fs.writeFile(moduleXmlFileUri, uint8array);
    }

    function createModuleRegistrationFile(moduleDir:string, moduleName:string) {
        
        let moduleRegistrationTemplate = getModuleRegistrationTemplate();

        moduleRegistrationTemplate  = moduleRegistrationTemplate .replace('%moduleName%', moduleName);

        let registrationFile = moduleDir + '\\registration.php';
        let moduleRegistrationFileUri = Uri.file(registrationFile);
        
        var uint8array = new Uint8Array(str2ab(moduleRegistrationTemplate));
        workspace.fs.writeFile(moduleRegistrationFileUri, uint8array);
    }

    function getModuleXmlTemplate() {
        return moduleXml;
    }

    function getModuleRegistrationTemplate() {
        return registrationPhp;
    }
}
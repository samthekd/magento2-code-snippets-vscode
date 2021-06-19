
import { window, commands, ExtensionContext } from 'vscode';
import { basicModule } from './basicModule';

export function activate(context: ExtensionContext) {
	context.subscriptions.push(commands.registerCommand('m2.moduleFunctions', async () => {
		const options: { [key: string]: (context: ExtensionContext) => Promise<void> } = {
			basicModule
		};
		const quickPick = window.createQuickPick();
		quickPick.items = Object.keys(options).map(label => ({ label }));
		quickPick.onDidChangeSelection(selection => {
			if (selection[0]) {
				options[selection[0].label](context)
					.catch(console.error);
			}
		});
		quickPick.onDidHide(() => quickPick.dispose());
		quickPick.show();
	}));
}

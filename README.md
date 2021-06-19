# Magento2 Code Snippets


# Usage

### Module File

**Trigger:** `m2.module`

**Output:**
```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Vendor_Module"/>
</config>
```

### Routes Frontend

**Trigger:** `m2.routes.frontend`

**Output:**
```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/etc/routes.xsd">
  <router id="standard">
    <route id="routeName" frontName="routeName">
		  <module name="Vendor_Module"/>
		</route>
	</router>
</config>
```

### Routes Adminhtml

**Trigger:** `m2.routes.adminhtml`

**Output:**
```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/etc/routes.xsd">
  <router id="admin">
    <route id="routeName" frontName="routeName">
		  <module name="Vendor_Module"/>
		</route>
	</router>
</config>
```

### Config File

**Trigger:** `m2.config`

**Output:**
```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
	<default>
			
  </default>
</config>
```

### Layout File

**Trigger:** `m2.layout`

**Output:**
```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">

</page>
```

### Event File

**Trigger:** `m2.event`

**Output:**
```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">

</config>
```

### Crontab File

**Trigger:** `m2.crontab`

**Output:**
```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Cron:etc/crontab.xsd">
  <group id="default">

	</group>
</config>
```

### Dependency Injection File

**Trigger:** `m2.di`

**Output:**
```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">

</config>
```

### Registration File

**Trigger:** `m2.registration`

**Output:**
```php
\Magento\Framework\Component\ComponentRegistrar::register(
  \Magento\Framework\Component\ComponentRegistrar::MODULE,
  "Vendor_Module"
  __DIR__
);

```

import { driver } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    public async open() {
        driver.setImplicitTimeout(10000);
        //driver.launchApp();
        driver.execute('mobile: activateApp', {});
        await $('id=com.google.android.calculator:id/main_calculator').isExisting();
    }
    public async close() {
        //driver.closeApp();
        driver.execute('mobile: terminateApp', {});
    }
}
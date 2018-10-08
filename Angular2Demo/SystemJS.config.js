/**
* System configuration for Angular samples
* Adjust as necessary for your application needs.
*/
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '../node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'startup',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'ngx-pagination': 'npm:ngx-pagination/dist/'
            //'primeng': 'node_modules/primeng',
            // ag libraries
            //'ag-grid-angular': 'node_modules/ag-grid-angular',
            //'ag-grid': 'node_modules/ag-grid',
            //'ag-grid-enterprise': 'node_modules/ag-grid-enterprise'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {           
            app: {
                main: '../../Startup/Startup.js',
                defaultExtension: 'js'
            },
            'ngx-pagination': {
                main: "ngx-pagination.js",
                defaultExtension: "js"
            },
            //'ag-grid-angular': {
            //    defaultExtension: "js"
            //},
            //'ag-grid-enterprise': {
            //    defaultExtension: "js"
            //},
            //map: {
            //    'ag-grid-angular': 'node_modules/ag-grid-angular',
            //    'ag-grid': 'node_modules/ag-grid',
            //    'ag-grid-enterprise': 'node_modules/ag-grid-enterprise'

            //},  
            //'ag-grid': {
            //    main: 'main.js'
            //},
            rxjs: {
                defaultExtension: 'js'
            },
            //'primeng': {
            //    defaultExtension: 'js'
            //},
            //'node_modules/primeng': {
            //    format: 'cjs',
            //    defaultExtension: 'js'
            //},
            //map: {
            //    "primeng": "node_modules/primeng"
            //},
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
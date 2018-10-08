import { Component , OnInit} from "@angular/core";
import { LoaderService } from '../Services/SpinnerServices';
//import { AgGridModule } from 'ag-grid-angular/main';

@Component({
    selector: "main-ui",
    templateUrl: "../UI/MasterPage.html",
    styleUrls: ['../UI/Spinner.css']   
})

export class MasterPageComponent implements OnInit {
    showLoader: boolean;
    constructor(
        private loaderService: LoaderService) {
       // this._compiler.clearCache();
    }   


    ngOnInit() {
        this.loaderService.status.subscribe((val: boolean) => {
            this.showLoader = val;
        });
        
    }
}

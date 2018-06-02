import { Component , OnInit} from "@angular/core";
import { LoaderService } from '../Services/SpinnerServices';

@Component({
    selector: "main-ui",
    templateUrl: "../UI/MasterPage.html",
    styleUrls: ['../UI/Spinner.css']
})

export class MasterPageComponent implements OnInit {
    showLoader: boolean;
    constructor(
        private loaderService: LoaderService) {
    }   


    ngOnInit() {
        this.loaderService.status.subscribe((val: boolean) => {
            this.showLoader = val;
        });
        
    }
}

import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";



declare var layer: any;
@Component({
    selector: 'sensor-search-index',
    templateUrl: './sensor-search.component.html',

})
export class SensorSearchComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public showModal: Boolean = false;

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {}
}

import {Paginator} from "./paginator.domain";

export class PagedResponse<T> {
    page: Paginator;
    data: T;
}

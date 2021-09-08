import { Observable } from "rxjs";

export interface BaseOperations<T,ID> {
    save(t: T): Observable<T>;
	update(id: ID, t: T): Observable<T>;
	findById(id: ID): Observable<T>;
	findAll(): Observable<T>;
	delete(id: ID): Observable<any>;
}

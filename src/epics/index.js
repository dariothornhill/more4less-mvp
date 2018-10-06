import { filter, delay, mapTo } from 'rxjs/operators';

export default action$ => action$.pipe(
  filter(x => x.type === 'PING'),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo({ type: 'PONG' }),
);

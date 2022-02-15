import { DoctorServices } from './doctors/doctors.service';
import { AsyncLocalStorage } from 'async_hooks';

enum AppAsyncStorageKey {
  TRACE_ID = 'traceId',
}

type AppAsyncStorage = Map<AppAsyncStorageKey, unknown>;

const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const doctorService = new DoctorServices();

export { appAsyncStorage, doctorService };

import doctor from './doctor-init-state';
import { IDoctor } from "../../types";
import { doctorService } from "../../services";

console.log('Running seed...');
try {
  doctor.forEach((doctor: IDoctor) => {
    doctorService.create(doctor);
  });
} catch (error: any) {
  throw new Error(error);
}
console.log('Seed completed');

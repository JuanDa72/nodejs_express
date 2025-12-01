
import 'dotenv/config';

import sequelize from '../internal/config/database.js';
import { Carrera, Materia } from '../internal/models/index.js';

import { dataPorCarrera } from './data.js';

const log = (message, indent = 0) => console.log(`${' '.repeat(indent * 2)}${message}`);

/**
 * @param {boolean} resetDatabase - Si es true, borrará todo (force: true).
 */
async function runSeeder(resetDatabase = false) {
  log('Iniciando el seeder...');

  try {
    if (resetDatabase) {
      log('MODO RESET: Borrando y recreando la base de datos...');
      await sequelize.sync({ force: true });
    } else {
      log('MODO ACTUALIZACIÓN: Sincronizando modelos (sin borrar)...');
      await sequelize.sync({ alter: true });
    }

    log('\nSincronizando todas las carreras y sus materias...');
    
    let totalCarrerasCreadas = 0;
    let totalMateriasCreadas = 0;


    for (const data of dataPorCarrera) {
      
      const [carrera, createdCarrera] = await Carrera.findOrCreate({
        where: { codigo_plan: data.carrera.codigo_plan },
        defaults: data.carrera
      });

      if (createdCarrera) {
        log(`Carrera creada: ${carrera.nombre}`, 1);
        totalCarrerasCreadas++;
      } else {
        log(`Carrera ya existía: ${carrera.nombre}`, 1);
      }
      
      let materiasCreadas = 0;
      let materiasSaltadas = 0;

      for (const materia of data.materias) {
        const [_, createdMateria] = await Materia.findOrCreate({
          where: { codigo: materia.codigo }, // Key única
          defaults: {
            ...materia,
            carreraId: carrera.id // ¡La magia! Asigna la materia a la carrera
          }
        });

        if (createdMateria) materiasCreadas++;
        else materiasSaltadas++;
      }
      
      if (materiasCreadas > 0) log(`  -> ${materiasCreadas} materias creadas.`, 2);
      if (materiasSaltadas > 0) log(`  -> ${materiasSaltadas} materias omitidas (ya existían).`, 2);
    }
    
    log('\nSeeder completado!');
    log(`   - ${totalCarrerasCreadas} Carreras creadas.`);
    log(`   - ${totalMateriasCreadas} Materias creadas.`);
    
    process.exit(0); // Termina el script exitosamente

  } catch (error) {
    console.error('Error fatal durante el seeder:', error);
    process.exit(1); // Termina el script con un error
  }
}

// --- Lógica para correrlo (no cambia) ---
const args = process.argv.slice(2);
const reset = args.includes('--reset');

runSeeder(reset);
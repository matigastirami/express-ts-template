import { exec } from 'child_process';

const migrateDb = () => {
    return new Promise((resolve, reject) => {
        exec('npm run typeorm:run-migrations', (err, stdout, stderr) => {
            if (err) {
                return reject(err);
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            return resolve(stdout);
        })
    });
    
}

export default migrateDb;
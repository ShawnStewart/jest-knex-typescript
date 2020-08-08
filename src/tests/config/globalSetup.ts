import db from '../../database/dbConfig';

const startup = async () => {
    console.log('list migrations', await db.migrate.list());
    console.log('\nMigrating');
    await db.migrate.latest();
};

export default startup;

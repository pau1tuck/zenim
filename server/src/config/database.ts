const models = require("express-cassandra");

//Tell express-cassandra to use the models-directory, and
//use bind() to load the models using cassandra configurations.
models.setDirectory(__dirname + "/models").bind(
    {
        clientOptions: {
            contactPoints: [process.env.DB_CONTACT_POINTS],
            localDataCenter: String(process.env.DB_LOCAL_DATA_CENTER),
            protocolOptions: { port: Number(process.env.DB_PORT) },
            keyspace: String(process.env.DB_KEYSPACE) || "mykeyspace",
            queryOptions: { consistency: models.consistencies.one },
            credentials: {
                username: String(process.env.DB_USER),
                password: String(process.env.DB_PASS),
            },
        },
        ormOptions: {
            defaultReplicationStrategy: {
                class: "SimpleStrategy",
                replication_factor: 1,
            },
            migration: "safe",
        },
    },
    (err: string) => {
        if (err) throw err;

        // You'll now have a `person` table in cassandra created against the model
        // schema you've defined earlier and you can now access the model instance
        // in `models.instance.Person` object containing supported orm operations.
    }
);

export default models;

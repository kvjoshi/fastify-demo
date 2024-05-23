import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

fastify.route({
    method: 'GET',
    url: '/test',
    schema: {
        querystring: {
            properties:{name: { type: 'string' }},
            required: ['name']
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'object' }
                },
                required: ['hello']
            }
        }
    },
    handler: async (request, reply) => {
        return { hello: {"re":request.query.name} };
    }
});

try{
    fastify.listen(3000, (err, address) => {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
        fastify.log.info(`Server listening on ${address}`);
    });
}
catch(err){
    fastify.log.error(err);
    process.exit(1);
}
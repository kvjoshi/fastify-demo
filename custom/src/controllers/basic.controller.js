import fastify from "fastify";

export const basicController  = (fastify,options , done) =>{
    fastify.get('/', (req, res) => {
        res.send('Hello World!')
    })
    done()
}
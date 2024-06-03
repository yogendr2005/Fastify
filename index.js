const fastify=require("fastify")({logger:true})
const app=fastify;

app.get("/",(request,reply)=>{
   reply.send("hello from fastify");
})

app.get("/about",(request,reply)=>{
    reply.send("hello from about page");
})

const start = async () => {
  try {
    const address = await app.listen({ port: 8000 });
    app.log.info(`Server is running on ${address}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start()
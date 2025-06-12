/* 

export function initMiddleware(app:any) {
 
	     //@ts-ignore
       
 app.use('api/v1/blog/*', async (c, next) => {
  
    const header = c.req.header('Authorization') || "";
  
    const token = header.split(' ')[1]; 
    // get the header 
    // verify the header 
    // if the headr is correct, we need can proceed 
    // if not, we return the user a 403 status code 
  
    //@ts-ignore
  
    const response = await verify(header,c.env.JWT_SECRET)
    if(response.id) {
      await next();
    }else {
      c.status(403)
      return c.json({ error: 'Unauthorized' });
    }
  
    })


} */
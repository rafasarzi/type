import { Request, Response } from "express";
import createUser from "./services/createUser";

export function helloWord(request: Request, response: Response){
    const user = createUser({
        email: 'rajustino@gmail.com',
        password:'12365',
        techs: [
            'node',
            'type',
            {title: 'javascript', experience:100}
         ],
    });
    return response.json({ message: 'Hello Word' });
}
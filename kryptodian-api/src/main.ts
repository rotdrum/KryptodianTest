import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Configure CORS
    app.enableCors({
      origin: 'http://localhost:3000', // Allow requests from this origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
      credentials: true, // Allow sending cookies and other credentials
    });

    
  await app.listen(3001); // Change port to 3001
}
bootstrap();

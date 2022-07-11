import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as packageConfig from '../package.json';

export const generateDocument = (app) => {
  const { name, description, version } = packageConfig;
  const options = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/doc', app, document);
};

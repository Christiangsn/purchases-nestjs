import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { InfraModule } from 'src/infra/infra.module';
import { TestResolver } from './test.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    InfraModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [TestResolver],
})
export class DomainModule {}
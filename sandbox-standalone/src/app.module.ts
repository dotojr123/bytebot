import { Module } from '@nestjs/common';
import { ComputerUseModule } from './core/computer-use/computer-use.module';
import { InputTrackingModule } from './core/input-tracking/input-tracking.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BytebotMcpModule } from './integrations/mcp';
import { SandboxController } from './api/sandbox.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Explicitly makes it globally available
    }),
    ServeStaticModule.forRoot({
      rootPath: '/opt/noVNC',
      serveRoot: '/novnc',
    }),
    ComputerUseModule,
    InputTrackingModule,
    BytebotMcpModule,
  ],
  controllers: [AppController, SandboxController],
  providers: [AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { SandboxController } from '../sandbox.controller';
import { ComputerUseService } from '../../core/computer-use/computer-use.service';

describe('SandboxController', () => {
  let controller: SandboxController;
  let computerUseService: ComputerUseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SandboxController],
      providers: [
        {
          provide: ComputerUseService,
          useValue: {
            action: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SandboxController>(SandboxController);
    computerUseService = module.get<ComputerUseService>(ComputerUseService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('execute should call computerUseService.action', async () => {
    const action = { action: 'move_mouse' as const, coordinates: { x: 1, y: 1 } };
    await controller.execute(action);
    expect(computerUseService.action).toHaveBeenCalledWith(action);
  });

  it('status should return ok', () => {
    const status = controller.getStatus();
    expect(status.status).toBe('ok');
    expect(status.uptime).toBeDefined();
  });
});

import { CreateGymUseCase } from '../create-gym'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeCreateGymUseCase() {
  const checkInsRepository = new PrismaGymsRepository()
  const useCase = new CreateGymUseCase(checkInsRepository)

  return useCase
}

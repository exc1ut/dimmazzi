import { IsPhoneNumber, IsString, Min, MinLength } from 'class-validator'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'

export class SendCode {
  @MinLength(17)
  @IsString()
  phone_number: string
}

export const resolver = classValidatorResolver(SendCode)

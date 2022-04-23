import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { IsString, Length, MinLength } from 'class-validator'

export class PhoneValidation {
  // @Length(5, 6)
  @IsString()
  code: string
}

export const resolver = classValidatorResolver(PhoneValidation)

import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { IsString, MinLength } from 'class-validator'

export class AddressValidation {
  @MinLength(1)
  @IsString()
  home: string

  @MinLength(3)
  @IsString()
  street: string

  @MinLength(3)
  @IsString()
  approximateLocation: string
}

export const resolver = classValidatorResolver(AddressValidation)

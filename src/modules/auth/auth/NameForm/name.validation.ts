import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { IsOptional, IsString, MinLength } from 'class-validator'
import { IEditProfile } from '../../../../api/auth/useEditProfileMutation'

export class NameValidation implements IEditProfile {
  @IsString()
  @MinLength(3)
  first_name: string

  @MinLength(3)
  @IsString()
  last_name: string
}

export const resolver = classValidatorResolver(NameValidation)

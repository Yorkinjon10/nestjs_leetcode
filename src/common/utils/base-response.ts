import { mixin } from '@nestjs/common';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

type Constructor<T = object> = new (...args: any[]) => T;

export function withBaseResponse<TBase extends Constructor>(
  Base: TBase,
) {
  class ResponseDTO {
    @Type(() => Base)
    @ValidateNested({ each: true })
    data!: any;
  }

  return mixin(ResponseDTO);
}

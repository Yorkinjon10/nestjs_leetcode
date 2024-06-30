
import { withBaseResponse } from '../utils/base-response';

export const RESPONSE_DTO_KEY = 'api_response_dto';

export function ResponseDTO(
  dto: any,
): MethodDecorator & ClassDecorator {
  return (
    target: object,
    _key?: string | symbol,
    descriptor?: TypedPropertyDescriptor<any>,
  ): any => {

    if (descriptor) {
      Reflect.defineMetadata(
        RESPONSE_DTO_KEY,
        {
          dto,
        },
        descriptor.value,
      );

      return descriptor;
    }
    Reflect.defineMetadata(
      RESPONSE_DTO_KEY,
      {
        dto,
      },
      target,
    );

    return target;
  };
}

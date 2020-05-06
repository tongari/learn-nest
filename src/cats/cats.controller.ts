import {
  Controller,
  Get,
  Post,
  Query,
  Put,
  HttpCode,
  HttpStatus,
  Header,
  Redirect,
} from '@nestjs/common'

interface CatsQuery {
  readonly hoge?: number
  readonly huga?: number
}

@Controller('cats')
export class CatsController {
  @Get()
  @Redirect('https://nestjs.com', HttpStatus.MOVED_PERMANENTLY)
  findAll(@Query() query: CatsQuery): string {
    const qu = Object.keys(query).map(key => `${key}=${query[key]}`)
    return `This action returns all cats : ${qu}`
  }

  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat'
  }

  @Put()
  @HttpCode(HttpStatus.NO_CONTENT)
  update(): string {
    return 'This action update a cat'
  }
}

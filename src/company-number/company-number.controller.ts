import { Controller, Get, Param } from '@nestjs/common';
import { CompanyNumberValidationPipe } from './company-number-validation.pipe';
import { CompanyNumberService } from './company-number.service';

@Controller('company-number')
export class CompanyNumberController {

    constructor(
        protected service: CompanyNumberService
    ) { }

    @Get(":num")
    async test(@Param("num",CompanyNumberValidationPipe) num:number) {
        return await this.service.check(num)
    }
}
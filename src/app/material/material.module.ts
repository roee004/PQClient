import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatFormFieldModule,
    ],
    exports: [
        MatButtonModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatFormFieldModule
    ],
    providers: [],
})
export class MaterialModule {}

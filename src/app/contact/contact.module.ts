import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AwesomePipe } from './awesome.pipe';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { HighlightDirective } from './highlight.directive';

/**This is a feature module */
@NgModule({
    /**Feature modules and lazy loaded modules should import CommonModule. They need the common directives */
    imports: [CommonModule, FormsModule],
    /**AwesomePipe and HighlightDirective are hidden from the rest of the application */
    declarations: [ContactComponent, HighlightDirective, AwesomePipe],
    exports: [ContactComponent],
    providers: [ContactService]
})
export class ContactModule { }
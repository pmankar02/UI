import { NgModule } from '@angular/core';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ApprovalRequestsComponent } from './approval-requests/approval-requests.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';






@NgModule({
  declarations: [
    UserOrdersComponent,
    ProfileComponent,
    ApprovalRequestsComponent,
    AllOrdersComponent,
   
    
    
  ],
  imports: [SharedModule],
})
export class UsersModule { }

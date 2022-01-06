/*
 * Public API Surface of ngx-fitelo
 */

export * from './lib/ngx-fitelo.service';
export * from './lib/ngx-fitelo.component';
export * from './lib/ngx-fitelo.module';
export * from './lib/analysis-graph';
export * from './lib/spinner';

// resources
export * from './lib/resources/api/oauth.resource';
export * from './lib/resources/api/payments.resource';
export * from './lib/resources/api/plans.resource';

export * from './lib/resources/firestore/custom-options.resource';
export * from './lib/resources/firestore/push-notifications.resource';
export * from './lib/resources/firestore/user-analysis.resource';
export * from './lib/resources/firestore/user-diary.resource';
export * from './lib/resources/firestore/users-payment.resource';
export * from './lib/resources/firestore/user-notifications.resource';
export * from './lib/resources/firestore/user-guidelines.resource';
export { PlansResource as FirestorePlansResource } from './lib/resources/firestore/plans.resource';

export * from './lib/resources/storage/storage.resource';
export * from './lib/resources/wordpress/wordpress.resource';


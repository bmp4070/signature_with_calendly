import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';

import SIGNATURE_FIELD from '@salesforce/schema/Signature__c';
import NAME_FIELD from '@salesforce/schema/Signature__c.Name';
import PHONE_FIELD from '@salesforce/schema/Signature__c.Phone__c';
import MOBILE_PHONE_FIELD from '@salesforce/schema/Signature__c.Mobile_Phone__c';
import EMAIL_FIELD from '@salesforce/schema/Signature__c.Email__c';

//import calendly from '@salesforce/resourceUrl/calendly';
//import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

// const PROPERTY_FIELDS = [SIGNATURE_FIELD];
const SIGNATURE_FIELDS = [
    NAME_FIELD,
    PHONE_FIELD,
    MOBILE_PHONE_FIELD,
    EMAIL_FIELD
];

export default class Signature extends NavigationMixin(LightningElement) {
    @api recordId;

    signatureFields = SIGNATURE_FIELDS;

    @wire(getRecord, { recordId: '$recordId', fields: SIGNATURE_FIELD })
    property;

    get signatureId() {
        return getFieldValue(this.property.data, SIGNATURE_FIELD);
    }

    //loadScript(this, calendly + '/widget.js').then(() => {
    //    Calendly._autoLoadInlineWidgets();
    //});
    // handleNavigateToRecord() {
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId: this.brokerId,
    //             objectApiName: 'Property__c',
    //             actionName: 'view'
    //         }
    //     });
    // }
}

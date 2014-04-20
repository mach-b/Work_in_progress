// Created 21-4-2014 8:00am - 12:00pm



var fingerprintString;
var urlString;
var fingerprintValidFormat;

/**
 *  Constructs a 'fingerprint' object (this will likely be handled elsewhere, or perhaps not considered necessary)
 *  and checks it follows the correct format.
 *  - Could add when it was created.
 *
 *  @param {string} fingerprintString a hash value of a resource.
 *  @param {string} urlString the location/URL of the resource.
 *  @param {boolean} fingerprintValidFormat indicates fingerprint is the correct format
 *  @return {TODO} return fingerprintValidFormat or fingerprint ???  
 */
function fingerprint(fingerprintString, urlString) {
    
    // Confirm fingerprintString and urlString are strings.
    if ((typeof fingerprintString == 'string' || fingerprintString instanceof String) && 
        (typeof uRLString == 'string' || uRLString instanceof String)) { // Confirms urlString is a string. 
        this.fingerprintString = fingerprintString;
        this.urlString = urlString;
        this.fingerprintValidFormat = true; // fingerprint is a valid format.
    }else {
        this.fingerprintValidFormat = false; // fingerprint format is invalid format.
    } 
//TODO  return something ???
}

var candidateFingerprint;
var referenceFingerprint;
var fingerprintsMatch;

/**
 *  fingerprintValidator establishes whether two fingerprints match
 *  
 *  @param {fingerprint} candidateFingerprint the fingerprint to validate.
 *  @param {fingerprint} referenceFingerprint the fingerprint to reference.
 *  @return {TODO} string, or boolean, or specificObject, indicating fingerprints match, or don't, or invalid ???
 *                  *** as at creation date returns boolean ***
 */
function fingerprintValidator(candidateFingerprint, referenceFingerprint) { 
var fingerprintsMatch;   
    // Checks both fingerprints are the correct format
    if (candidateFingerprint.fingerprintValidFormat == true &&
        referenceFingerprint.fingerprintValidFormat == true) { 
        this.candidateFingerprint = candidateFingerprint;
        this.referenceFingerprint = referenceFingerprint;
        
        // Checks fingerprintStrings and urlStrings are equal length.
        if ((this.candidateFingerprint.fingerprintString.length ==
            this.referenceFingerprint.fingerprintString.length) &&
           (this.candidateFingerprint.urlString.length ==
            this.referenceFingerprint.urlString.length)) {
            
            // Check urlStrings match.
            for (var i = 0; i < candidateFingerprint.urlString.length; i++) {
                if (this.candidateFingerprint.urlString.charAt[i]==
                    this.referenceFingerprint.urlString.charAt[i]) {
                    fingerprintsMatch = true;// Characters match, continue.
                }else {
                    fingerprintsMatch = false;// Mismatching character found, URLs don't match.
                }
                if (fingerprintsMatch == false) {
                    break; // fingerprints do not match.
                }  
            }
            
            // Check fingerprintStrings match.
            if (fingerprintsMatch) {
                for (var i = 0; i < candidateFingerprint.fingerprintString.length; i++) {
                    if (this.candidateFingerprint.fingerprintString.charAt[i]==
                       this.referenceFingerprint.fingerprintString.charAt[i]) {
                        fingerprintsMatch = true;
                    }else {
                        fingerprintsMatch = false;
                    }
                    if (fingerprintsMatch == false) {
                        break;
                    }
                }
            }
        }else {
            fingerprintsMatch = false;  // ???
            // Check fingerprintStrings are equal length.
            if ((this.candidateFingerprint.fingerprintString.length ==
            this.referenceFingerprint.fingerprintString.length)) {
//TODO          // return urlStrings don't match, they differ in length.
            }else {
//TODO          // Check urlStrings are equal length.
                (this.candidateFingerprint.urlString.length ==
                this.referenceFingerprint.urlString.length) {
//TODO              // return fingerprintStrings don't match, they differ in length.     
                }else {
//TODO              // return neither fingerprintStrings or urlStrings match, they both differ in length.           
                }
            }
        }
        
    }else { // Cannot match, do not match  (unless they are both null perhaps)
        fingerprintsMatch = false;  // ???
        if (candidateFingerprint.fingerprintValidFormat = false) {
            if (referenceFingerprint.fingerprintValidFormat = false) {
//TODO          // return fingerprint is valid.  ???
            }else {
//TODO          // return only referenceFingerprint is valid. ???
            }
        }else {
//TODO          // return only candidateFingerprint is valid. ???
        }
    }
    return fingerprintsMatch;
}
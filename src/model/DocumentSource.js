/**
 * Web of Science™ Starter API
 * The Web of Science™ Starter API provides basic metadata and search functionality for Web of Science™ Documents and Journals. Based on your subscription, this API can return times cited of documents.  ## Resouces This API follows the REST approach to disclose resources in URL format. Only the GET method is currently available to perform requests over HTTP.  The API is available on the [Clarivate Developer Portal](https://developer.clarivate.com/apis/wos-starter). You can find more details about the subscription and the Plans.  ## Content  You can learn more about content at [Web of Science™ Product Page](https://clarivate.com/webofsciencegroup/solutions/web-of-science/) or in the [Web of Science™ Help](https://webofscience.help.clarivate.com/en-us/Content/home.htm).  (TODO: Add list of fields that are returned from this API.)  ## Credentials  All requests require authentication with an API Key authentication flow. For more details, check the [Guide][https://developer.clarivate.com/help/api-access#key_access].   ## API Client Libraries TBD  ## Search and field tags for Web of Science documents Web of Science™ offers [advanced search query builder](https://webofscience.help.clarivate.com/en-us/Content/advanced-search.html). This API does not support all field tags for documents. [Web of Science API Expanded](https://developer.clarivate.com/apis/wos) offers all available field tags. The following table lists the field tags that are supported by this API. | Field Tag | Description                                                                                                                                                 | |-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------| | TI        | Title of document                                                                                                                                           | | IS        | ISSN or ISBN                                                                                                                                                | | SO        | Source title - The result contains all source titles within product database (for example, journal titles and/or book titles if the product includes books) | | VL        | Volume                                                                                                                                                      | | PG        | Page                                                                                                                                                        | | CS        | Issue                                                                                                                                                       | | PY        | Year Published                                                                                                                                              | | AU        | Author                                                                                                                                                      | | UT        | Accession Number                                                                                                                                            | | DO        | DOI                                                                                                                                                         | | PMID      | PubMed ID                                                                                                                                                   | | OG        | Search for preferred organization names and/or their name variants from the Preferred Organization Index. <p> A search on a preferred organization name returns all records that contain the preferred name and all records that contain its name variants. A search on a name variant returns all records that contain the variant. For example, Cornell Law Sch returns all records that contain Cornell Law Sch in the Addresses field. <p> When searching for organization names that contain a Boolean (AND, NOT, NEAR, and SAME), always enclose the word in quotation marks ( \" \" ). For example: <p>   - OG=(Japan Science \"and\" Technology Agency (JST))      <br>   - OG=(\"Near\" East Univ)         <br> - OG=(\"OR\" Hlth Sci Univ)                           | | TS        | Searches for topic terms in the following fields within a document: <p> - Title <br> - Abstract <br> - Author keywords <br> - Keywords Plus  ## Pagination To ensure fast response time, each search or multiple entity calls (such as `/documents`) retrieve only a certain number of hits/records.  There are two optional request parameters to browse along with the result&#58; _limit_ and _page_.  - limit&#58; Number of returned results, ranging from 0 to 50 (default **10**) - page&#58; Specifying a page to retrieve (default **1**)  Moreover, this information is shown in the response body, in the tag **metadata**&#58;  ```json \"metadata\": {   \"total\": 91,   \"page\": 1,   \"limit\": 10 } ```  ## Errors The WoS Journals API uses conventional HTTP success or failure status codes. For errors, some extra information is included to indicate what went wrong in the JSON response. The list of HTTP codes is listed below.  | Code  | Title  | Description | |---|---|---| | 400  | Bad request  | Request syntax error | | 401  | Unauthorized  | The API key is invalid or missed | | 404  | Not found  | The resource is not found | | 405 | Method not allowed | Method other than GET is not allowed | | 50X  | Server errors  | Technical error with servers| Each error response (except `401 Unauthorized` error) contains the code of the error, the title of the error and detailed description of the error: a misprint in an endpoint, wrong URL parameter, etc. The example of the error message is shown below:  ```json   \"error\": {     \"status\": 404,     \"title\": \"Resource couldn't be found\",     \"details\": \"There is no record found in the Web of Science database. Please check your query.\"   } ``` For the `401 Unauthorized` error the response body is a little bit different: ```json {   \"error_description\": \"The access token is missing\",   \"error\": \"invalid_request\" } 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DocumentSourcePages from './DocumentSourcePages';

/**
 * The DocumentSource model module.
 * @module model/DocumentSource
 * @version 1.0.0
 */
class DocumentSource {
    /**
     * Constructs a new <code>DocumentSource</code>.
     * @alias module:model/DocumentSource
     */
    constructor() { 
        
        DocumentSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentSource} obj Optional instance to populate.
     * @return {module:model/DocumentSource} The populated <code>DocumentSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentSource();

            if (data.hasOwnProperty('sourceTitle')) {
                obj['sourceTitle'] = ApiClient.convertToType(data['sourceTitle'], 'String');
            }
            if (data.hasOwnProperty('publishYear')) {
                obj['publishYear'] = ApiClient.convertToType(data['publishYear'], 'Number');
            }
            if (data.hasOwnProperty('publishMonth')) {
                obj['publishMonth'] = ApiClient.convertToType(data['publishMonth'], 'String');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'String');
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = ApiClient.convertToType(data['issue'], 'String');
            }
            if (data.hasOwnProperty('supplement')) {
                obj['supplement'] = ApiClient.convertToType(data['supplement'], 'String');
            }
            if (data.hasOwnProperty('specialIssue')) {
                obj['specialIssue'] = ApiClient.convertToType(data['specialIssue'], 'String');
            }
            if (data.hasOwnProperty('articleNumber')) {
                obj['articleNumber'] = ApiClient.convertToType(data['articleNumber'], 'String');
            }
            if (data.hasOwnProperty('pages')) {
                obj['pages'] = DocumentSourcePages.constructFromObject(data['pages']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} sourceTitle
 */
DocumentSource.prototype['sourceTitle'] = undefined;

/**
 * @member {Number} publishYear
 */
DocumentSource.prototype['publishYear'] = undefined;

/**
 * @member {String} publishMonth
 */
DocumentSource.prototype['publishMonth'] = undefined;

/**
 * @member {String} volume
 */
DocumentSource.prototype['volume'] = undefined;

/**
 * @member {String} issue
 */
DocumentSource.prototype['issue'] = undefined;

/**
 * @member {String} supplement
 */
DocumentSource.prototype['supplement'] = undefined;

/**
 * @member {String} specialIssue
 */
DocumentSource.prototype['specialIssue'] = undefined;

/**
 * @member {String} articleNumber
 */
DocumentSource.prototype['articleNumber'] = undefined;

/**
 * @member {module:model/DocumentSourcePages} pages
 */
DocumentSource.prototype['pages'] = undefined;






export default DocumentSource;


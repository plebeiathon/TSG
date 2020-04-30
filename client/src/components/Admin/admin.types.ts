export type AdminProps = {
  requests: Array<Object>;
  donations: Array<Object>;
}

type Address = {
    street: string;
    city: string;
    zip: number;
}

export type DonationModel = {
    id: string | number | undefined;
    company_name: string;
    mailing_address: string;
    reason_for_donation: string;
    storage_requirements: string;
    product_quantity: number;
    contact_name: string;
    phone_number: string;
    product_name: string;
    product_description: string;
    packaging_details: string;
    list_of_ingredients: string;
    created_at: string;
    updated_at: string;
}

export type RequestsModel = {
    id: string | number | undefined;
    specific_request: string;
    household_size: number;
    dietary_restrictions: string;
    allergies: string;
    address: Address;
    status: string;
    user_id: string;
    name: string;
}

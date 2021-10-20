import {BikeStolenRecord} from "./bikeStolenRecord";
import {BikeComponent} from "./bikeComponent";
import {BikeImage} from "./bikeImage";

export interface Bike {
    date_stolen: number;
    description: string;
    frame_colors: string[];
    frame_model: string;
    id: number;
    is_stock_img: boolean;
    large_img: string;
    location_found?: string;
    manufacturer_name: string;
    external_id?: any;
    registry_name?: string;
    registry_url?: string;
    serial: string;
    status?: any;
    stolen: boolean;
    stolen_location: string;
    thumb: string;
    title: string;
    url: string;
    year: number;
    registration_created_at: number;
    registration_updated_at: number;
    api_url: string;
    manufacturer_id: number;
    paint_description?: string;
    name: string;
    frame_size: string;
    rear_tire_narrow: boolean;
    front_tire_narrow: boolean;
    type_of_cycle: string;
    test_bike: boolean;
    rear_wheel_size_iso_bsd: number;
    front_wheel_size_iso_bsd: number;
    handlebar_type_slug: string;
    frame_material_slug?: string;
    front_gear_type_slug: string;
    rear_gear_type_slug: string;
    additional_registration: string;
    stolen_record: BikeStolenRecord;
    public_images: BikeImage[];
    components: BikeComponent[];
}
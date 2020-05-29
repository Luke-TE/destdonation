export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
};

/** All input for the create `Delivery` mutation. */
export type CreateDeliveryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Delivery` to be created by this mutation. */
  delivery: DeliveryInput;
};

/** The output of our create `Delivery` mutation. */
export type CreateDeliveryPayload = {
  __typename?: "CreateDeliveryPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Delivery` that was created by this mutation. */
  delivery?: Maybe<Delivery>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Project` that is related to this `Delivery`. */
  projectByProjectId?: Maybe<Project>;
  /** Reads a single `Driver` that is related to this `Delivery`. */
  driverByDriverId?: Maybe<Driver>;
  /** Reads a single `Partner` that is related to this `Delivery`. */
  partnerByPartnerId?: Maybe<Partner>;
  /** An edge for our `Delivery`. May be used by Relay 1. */
  deliveryEdge?: Maybe<DeliveriesEdge>;
};

/** The output of our create `Delivery` mutation. */
export type CreateDeliveryPayloadDeliveryEdgeArgs = {
  orderBy?: Maybe<Array<DeliveriesOrderBy>>;
};

/** All input for the create `Driver` mutation. */
export type CreateDriverInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Driver` to be created by this mutation. */
  driver: DriverInput;
};

/** The output of our create `Driver` mutation. */
export type CreateDriverPayload = {
  __typename?: "CreateDriverPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Driver` that was created by this mutation. */
  driver?: Maybe<Driver>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Driver`. May be used by Relay 1. */
  driverEdge?: Maybe<DriversEdge>;
};

/** The output of our create `Driver` mutation. */
export type CreateDriverPayloadDriverEdgeArgs = {
  orderBy?: Maybe<Array<DriversOrderBy>>;
};

/** All input for the create `FoodDonor` mutation. */
export type CreateFoodDonorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `FoodDonor` to be created by this mutation. */
  foodDonor: FoodDonorInput;
};

/** The output of our create `FoodDonor` mutation. */
export type CreateFoodDonorPayload = {
  __typename?: "CreateFoodDonorPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `FoodDonor` that was created by this mutation. */
  foodDonor?: Maybe<FoodDonor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `FoodDonor`. May be used by Relay 1. */
  foodDonorEdge?: Maybe<FoodDonorsEdge>;
};

/** The output of our create `FoodDonor` mutation. */
export type CreateFoodDonorPayloadFoodDonorEdgeArgs = {
  orderBy?: Maybe<Array<FoodDonorsOrderBy>>;
};

/** All input for the create `Partner` mutation. */
export type CreatePartnerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Partner` to be created by this mutation. */
  partner: PartnerInput;
};

/** The output of our create `Partner` mutation. */
export type CreatePartnerPayload = {
  __typename?: "CreatePartnerPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Partner` that was created by this mutation. */
  partner?: Maybe<Partner>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Partner`. May be used by Relay 1. */
  partnerEdge?: Maybe<PartnersEdge>;
};

/** The output of our create `Partner` mutation. */
export type CreatePartnerPayloadPartnerEdgeArgs = {
  orderBy?: Maybe<Array<PartnersOrderBy>>;
};

/** All input for the create `Pickup` mutation. */
export type CreatePickupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Pickup` to be created by this mutation. */
  pickup: PickupInput;
};

/** The output of our create `Pickup` mutation. */
export type CreatePickupPayload = {
  __typename?: "CreatePickupPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Pickup` that was created by this mutation. */
  pickup?: Maybe<Pickup>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Project` that is related to this `Pickup`. */
  projectByProjectId?: Maybe<Project>;
  /** Reads a single `Driver` that is related to this `Pickup`. */
  driverByDriverId?: Maybe<Driver>;
  /** Reads a single `Partner` that is related to this `Pickup`. */
  partnerByPartnerId?: Maybe<Partner>;
  /** An edge for our `Pickup`. May be used by Relay 1. */
  pickupEdge?: Maybe<PickupsEdge>;
};

/** The output of our create `Pickup` mutation. */
export type CreatePickupPayloadPickupEdgeArgs = {
  orderBy?: Maybe<Array<PickupsOrderBy>>;
};

/** All input for the create `Project` mutation. */
export type CreateProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Project` to be created by this mutation. */
  project: ProjectInput;
};

/** The output of our create `Project` mutation. */
export type CreateProjectPayload = {
  __typename?: "CreateProjectPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Project` that was created by this mutation. */
  project?: Maybe<Project>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `FoodDonor` that is related to this `Project`. */
  foodDonorByDonorId?: Maybe<FoodDonor>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectsEdge>;
};

/** The output of our create `Project` mutation. */
export type CreateProjectPayloadProjectEdgeArgs = {
  orderBy?: Maybe<Array<ProjectsOrderBy>>;
};

/** All input for the `deleteDeliveryById` mutation. */
export type DeleteDeliveryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
};

/** The output of our delete `Delivery` mutation. */
export type DeleteDeliveryPayload = {
  __typename?: "DeleteDeliveryPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Delivery` that was deleted by this mutation. */
  delivery?: Maybe<Delivery>;
  deletedDeliveryId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Project` that is related to this `Delivery`. */
  projectByProjectId?: Maybe<Project>;
  /** Reads a single `Driver` that is related to this `Delivery`. */
  driverByDriverId?: Maybe<Driver>;
  /** Reads a single `Partner` that is related to this `Delivery`. */
  partnerByPartnerId?: Maybe<Partner>;
  /** An edge for our `Delivery`. May be used by Relay 1. */
  deliveryEdge?: Maybe<DeliveriesEdge>;
};

/** The output of our delete `Delivery` mutation. */
export type DeleteDeliveryPayloadDeliveryEdgeArgs = {
  orderBy?: Maybe<Array<DeliveriesOrderBy>>;
};

/** All input for the `deleteDriverById` mutation. */
export type DeleteDriverByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
};

/** The output of our delete `Driver` mutation. */
export type DeleteDriverPayload = {
  __typename?: "DeleteDriverPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Driver` that was deleted by this mutation. */
  driver?: Maybe<Driver>;
  deletedDriverId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Driver`. May be used by Relay 1. */
  driverEdge?: Maybe<DriversEdge>;
};

/** The output of our delete `Driver` mutation. */
export type DeleteDriverPayloadDriverEdgeArgs = {
  orderBy?: Maybe<Array<DriversOrderBy>>;
};

/** All input for the `deleteFoodDonorById` mutation. */
export type DeleteFoodDonorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
};

/** The output of our delete `FoodDonor` mutation. */
export type DeleteFoodDonorPayload = {
  __typename?: "DeleteFoodDonorPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `FoodDonor` that was deleted by this mutation. */
  foodDonor?: Maybe<FoodDonor>;
  deletedFoodDonorId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `FoodDonor`. May be used by Relay 1. */
  foodDonorEdge?: Maybe<FoodDonorsEdge>;
};

/** The output of our delete `FoodDonor` mutation. */
export type DeleteFoodDonorPayloadFoodDonorEdgeArgs = {
  orderBy?: Maybe<Array<FoodDonorsOrderBy>>;
};

/** All input for the `deletePartnerById` mutation. */
export type DeletePartnerByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
};

/** The output of our delete `Partner` mutation. */
export type DeletePartnerPayload = {
  __typename?: "DeletePartnerPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Partner` that was deleted by this mutation. */
  partner?: Maybe<Partner>;
  deletedPartnerId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Partner`. May be used by Relay 1. */
  partnerEdge?: Maybe<PartnersEdge>;
};

/** The output of our delete `Partner` mutation. */
export type DeletePartnerPayloadPartnerEdgeArgs = {
  orderBy?: Maybe<Array<PartnersOrderBy>>;
};

/** All input for the `deletePickupById` mutation. */
export type DeletePickupByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
};

/** The output of our delete `Pickup` mutation. */
export type DeletePickupPayload = {
  __typename?: "DeletePickupPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Pickup` that was deleted by this mutation. */
  pickup?: Maybe<Pickup>;
  deletedPickupId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Project` that is related to this `Pickup`. */
  projectByProjectId?: Maybe<Project>;
  /** Reads a single `Driver` that is related to this `Pickup`. */
  driverByDriverId?: Maybe<Driver>;
  /** Reads a single `Partner` that is related to this `Pickup`. */
  partnerByPartnerId?: Maybe<Partner>;
  /** An edge for our `Pickup`. May be used by Relay 1. */
  pickupEdge?: Maybe<PickupsEdge>;
};

/** The output of our delete `Pickup` mutation. */
export type DeletePickupPayloadPickupEdgeArgs = {
  orderBy?: Maybe<Array<PickupsOrderBy>>;
};

/** All input for the `deleteProjectById` mutation. */
export type DeleteProjectByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
};

/** The output of our delete `Project` mutation. */
export type DeleteProjectPayload = {
  __typename?: "DeleteProjectPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Project` that was deleted by this mutation. */
  project?: Maybe<Project>;
  deletedProjectId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `FoodDonor` that is related to this `Project`. */
  foodDonorByDonorId?: Maybe<FoodDonor>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectsEdge>;
};

/** The output of our delete `Project` mutation. */
export type DeleteProjectPayloadProjectEdgeArgs = {
  orderBy?: Maybe<Array<ProjectsOrderBy>>;
};

/** A connection to a list of `Delivery` values. */
export type DeliveriesConnection = {
  __typename?: "DeliveriesConnection";
  /** A list of `Delivery` objects. */
  nodes: Array<Maybe<Delivery>>;
  /** A list of edges which contains the `Delivery` and cursor to aid in pagination. */
  edges: Array<DeliveriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Delivery` you could get from the connection. */
  totalCount: Scalars["Int"];
};

/** A `Delivery` edge in the connection. */
export type DeliveriesEdge = {
  __typename?: "DeliveriesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `Delivery` at the end of the edge. */
  node?: Maybe<Delivery>;
};

/** Methods to use when ordering `Delivery`. */
export enum DeliveriesOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  ProjectIdAsc = "PROJECT_ID_ASC",
  ProjectIdDesc = "PROJECT_ID_DESC",
  DriverIdAsc = "DRIVER_ID_ASC",
  DriverIdDesc = "DRIVER_ID_DESC",
  PartnerIdAsc = "PARTNER_ID_ASC",
  PartnerIdDesc = "PARTNER_ID_DESC",
  DatePickedUpAsc = "DATE_PICKED_UP_ASC",
  DatePickedUpDesc = "DATE_PICKED_UP_DESC",
  TotalMealsAsc = "TOTAL_MEALS_ASC",
  TotalMealsDesc = "TOTAL_MEALS_DESC",
  TotalKgAsc = "TOTAL_KG_ASC",
  TotalKgDesc = "TOTAL_KG_DESC",
  FruitAndVegKgAsc = "FRUIT_AND_VEG_KG_ASC",
  FruitAndVegKgDesc = "FRUIT_AND_VEG_KG_DESC",
  MeatAndPoultryKgAsc = "MEAT_AND_POULTRY_KG_ASC",
  MeatAndPoultryKgDesc = "MEAT_AND_POULTRY_KG_DESC",
  DairyItemsKgAsc = "DAIRY_ITEMS_KG_ASC",
  DairyItemsKgDesc = "DAIRY_ITEMS_KG_DESC",
  FrozenFoodKgAsc = "FROZEN_FOOD_KG_ASC",
  FrozenFoodKgDesc = "FROZEN_FOOD_KG_DESC",
  SnacksAndBakedGoodsKgAsc = "SNACKS_AND_BAKED_GOODS_KG_ASC",
  SnacksAndBakedGoodsKgDesc = "SNACKS_AND_BAKED_GOODS_KG_DESC",
  PersonalCareItemsKgAsc = "PERSONAL_CARE_ITEMS_KG_ASC",
  PersonalCareItemsKgDesc = "PERSONAL_CARE_ITEMS_KG_DESC",
  PantryAndGroceryItemsKgAsc = "PANTRY_AND_GROCERY_ITEMS_KG_ASC",
  PantryAndGroceryItemsKgDesc = "PANTRY_AND_GROCERY_ITEMS_KG_DESC",
  FreshPreparedMealsKgAsc = "FRESH_PREPARED_MEALS_KG_ASC",
  FreshPreparedMealsKgDesc = "FRESH_PREPARED_MEALS_KG_DESC",
  DeliItemsKgAsc = "DELI_ITEMS_KG_ASC",
  DeliItemsKgDesc = "DELI_ITEMS_KG_DESC",
  DrinksKgAsc = "DRINKS_KG_ASC",
  DrinksKgDesc = "DRINKS_KG_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type Delivery = {
  __typename?: "Delivery";
  id: Scalars["Int"];
  projectId?: Maybe<Scalars["Int"]>;
  driverId?: Maybe<Scalars["Int"]>;
  partnerId?: Maybe<Scalars["Int"]>;
  datePickedUp?: Maybe<Scalars["Date"]>;
  totalMeals?: Maybe<Scalars["Float"]>;
  totalKg?: Maybe<Scalars["Float"]>;
  fruitAndVegKg?: Maybe<Scalars["Float"]>;
  meatAndPoultryKg?: Maybe<Scalars["Float"]>;
  dairyItemsKg?: Maybe<Scalars["Float"]>;
  frozenFoodKg?: Maybe<Scalars["Float"]>;
  snacksAndBakedGoodsKg?: Maybe<Scalars["Float"]>;
  personalCareItemsKg?: Maybe<Scalars["Float"]>;
  pantryAndGroceryItemsKg?: Maybe<Scalars["Float"]>;
  freshPreparedMealsKg?: Maybe<Scalars["Float"]>;
  deliItemsKg?: Maybe<Scalars["Float"]>;
  drinksKg?: Maybe<Scalars["Float"]>;
  /** Reads a single `Project` that is related to this `Delivery`. */
  projectByProjectId?: Maybe<Project>;
  /** Reads a single `Driver` that is related to this `Delivery`. */
  driverByDriverId?: Maybe<Driver>;
  /** Reads a single `Partner` that is related to this `Delivery`. */
  partnerByPartnerId?: Maybe<Partner>;
};

/**
 * A condition to be used against `Delivery` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type DeliveryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `projectId` field. */
  projectId?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `driverId` field. */
  driverId?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `partnerId` field. */
  partnerId?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `datePickedUp` field. */
  datePickedUp?: Maybe<Scalars["Date"]>;
  /** Checks for equality with the object’s `totalMeals` field. */
  totalMeals?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `totalKg` field. */
  totalKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `fruitAndVegKg` field. */
  fruitAndVegKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `meatAndPoultryKg` field. */
  meatAndPoultryKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `dairyItemsKg` field. */
  dairyItemsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `frozenFoodKg` field. */
  frozenFoodKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `snacksAndBakedGoodsKg` field. */
  snacksAndBakedGoodsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `personalCareItemsKg` field. */
  personalCareItemsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `pantryAndGroceryItemsKg` field. */
  pantryAndGroceryItemsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `freshPreparedMealsKg` field. */
  freshPreparedMealsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `deliItemsKg` field. */
  deliItemsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `drinksKg` field. */
  drinksKg?: Maybe<Scalars["Float"]>;
};

/** An input for mutations affecting `Delivery` */
export type DeliveryInput = {
  id?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  driverId?: Maybe<Scalars["Int"]>;
  partnerId?: Maybe<Scalars["Int"]>;
  datePickedUp?: Maybe<Scalars["Date"]>;
  totalMeals?: Maybe<Scalars["Float"]>;
  totalKg?: Maybe<Scalars["Float"]>;
  fruitAndVegKg?: Maybe<Scalars["Float"]>;
  meatAndPoultryKg?: Maybe<Scalars["Float"]>;
  dairyItemsKg?: Maybe<Scalars["Float"]>;
  frozenFoodKg?: Maybe<Scalars["Float"]>;
  snacksAndBakedGoodsKg?: Maybe<Scalars["Float"]>;
  personalCareItemsKg?: Maybe<Scalars["Float"]>;
  pantryAndGroceryItemsKg?: Maybe<Scalars["Float"]>;
  freshPreparedMealsKg?: Maybe<Scalars["Float"]>;
  deliItemsKg?: Maybe<Scalars["Float"]>;
  drinksKg?: Maybe<Scalars["Float"]>;
};

/** Represents an update to a `Delivery`. Fields that are set will be updated. */
export type DeliveryPatch = {
  id?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  driverId?: Maybe<Scalars["Int"]>;
  partnerId?: Maybe<Scalars["Int"]>;
  datePickedUp?: Maybe<Scalars["Date"]>;
  totalMeals?: Maybe<Scalars["Float"]>;
  totalKg?: Maybe<Scalars["Float"]>;
  fruitAndVegKg?: Maybe<Scalars["Float"]>;
  meatAndPoultryKg?: Maybe<Scalars["Float"]>;
  dairyItemsKg?: Maybe<Scalars["Float"]>;
  frozenFoodKg?: Maybe<Scalars["Float"]>;
  snacksAndBakedGoodsKg?: Maybe<Scalars["Float"]>;
  personalCareItemsKg?: Maybe<Scalars["Float"]>;
  pantryAndGroceryItemsKg?: Maybe<Scalars["Float"]>;
  freshPreparedMealsKg?: Maybe<Scalars["Float"]>;
  deliItemsKg?: Maybe<Scalars["Float"]>;
  drinksKg?: Maybe<Scalars["Float"]>;
};

export type Driver = {
  __typename?: "Driver";
  id: Scalars["Int"];
  code?: Maybe<Scalars["String"]>;
  display?: Maybe<Scalars["String"]>;
  /** Reads and enables pagination through a set of `Pickup`. */
  pickupsByDriverId: PickupsConnection;
  /** Reads and enables pagination through a set of `Delivery`. */
  deliveriesByDriverId: DeliveriesConnection;
};

export type DriverPickupsByDriverIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<PickupsOrderBy>>;
  condition?: Maybe<PickupCondition>;
};

export type DriverDeliveriesByDriverIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<DeliveriesOrderBy>>;
  condition?: Maybe<DeliveryCondition>;
};

/** A condition to be used against `Driver` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DriverCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `code` field. */
  code?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `display` field. */
  display?: Maybe<Scalars["String"]>;
};

/** An input for mutations affecting `Driver` */
export type DriverInput = {
  id?: Maybe<Scalars["Int"]>;
  code?: Maybe<Scalars["String"]>;
  display?: Maybe<Scalars["String"]>;
};

/** Represents an update to a `Driver`. Fields that are set will be updated. */
export type DriverPatch = {
  id?: Maybe<Scalars["Int"]>;
  code?: Maybe<Scalars["String"]>;
  display?: Maybe<Scalars["String"]>;
};

/** A connection to a list of `Driver` values. */
export type DriversConnection = {
  __typename?: "DriversConnection";
  /** A list of `Driver` objects. */
  nodes: Array<Maybe<Driver>>;
  /** A list of edges which contains the `Driver` and cursor to aid in pagination. */
  edges: Array<DriversEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Driver` you could get from the connection. */
  totalCount: Scalars["Int"];
};

/** A `Driver` edge in the connection. */
export type DriversEdge = {
  __typename?: "DriversEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `Driver` at the end of the edge. */
  node?: Maybe<Driver>;
};

/** Methods to use when ordering `Driver`. */
export enum DriversOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  CodeAsc = "CODE_ASC",
  CodeDesc = "CODE_DESC",
  DisplayAsc = "DISPLAY_ASC",
  DisplayDesc = "DISPLAY_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type FoodDonor = {
  __typename?: "FoodDonor";
  id: Scalars["Int"];
  londonBorough?: Maybe<Scalars["String"]>;
  businessType?: Maybe<Scalars["String"]>;
  postCode?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  isFoodDistributor?: Maybe<Scalars["Boolean"]>;
  /** Reads and enables pagination through a set of `Project`. */
  projectsByDonorId: ProjectsConnection;
};

export type FoodDonorProjectsByDonorIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ProjectsOrderBy>>;
  condition?: Maybe<ProjectCondition>;
};

/**
 * A condition to be used against `FoodDonor` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FoodDonorCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `londonBorough` field. */
  londonBorough?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `businessType` field. */
  businessType?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `postCode` field. */
  postCode?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `isFoodDistributor` field. */
  isFoodDistributor?: Maybe<Scalars["Boolean"]>;
};

/** An input for mutations affecting `FoodDonor` */
export type FoodDonorInput = {
  id?: Maybe<Scalars["Int"]>;
  londonBorough?: Maybe<Scalars["String"]>;
  businessType?: Maybe<Scalars["String"]>;
  postCode?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  isFoodDistributor?: Maybe<Scalars["Boolean"]>;
};

/** Represents an update to a `FoodDonor`. Fields that are set will be updated. */
export type FoodDonorPatch = {
  id?: Maybe<Scalars["Int"]>;
  londonBorough?: Maybe<Scalars["String"]>;
  businessType?: Maybe<Scalars["String"]>;
  postCode?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  isFoodDistributor?: Maybe<Scalars["Boolean"]>;
};

/** A connection to a list of `FoodDonor` values. */
export type FoodDonorsConnection = {
  __typename?: "FoodDonorsConnection";
  /** A list of `FoodDonor` objects. */
  nodes: Array<Maybe<FoodDonor>>;
  /** A list of edges which contains the `FoodDonor` and cursor to aid in pagination. */
  edges: Array<FoodDonorsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FoodDonor` you could get from the connection. */
  totalCount: Scalars["Int"];
};

/** A `FoodDonor` edge in the connection. */
export type FoodDonorsEdge = {
  __typename?: "FoodDonorsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `FoodDonor` at the end of the edge. */
  node?: Maybe<FoodDonor>;
};

/** Methods to use when ordering `FoodDonor`. */
export enum FoodDonorsOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  LondonBoroughAsc = "LONDON_BOROUGH_ASC",
  LondonBoroughDesc = "LONDON_BOROUGH_DESC",
  BusinessTypeAsc = "BUSINESS_TYPE_ASC",
  BusinessTypeDesc = "BUSINESS_TYPE_DESC",
  PostCodeAsc = "POST_CODE_ASC",
  PostCodeDesc = "POST_CODE_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  IsFoodDistributorAsc = "IS_FOOD_DISTRIBUTOR_ASC",
  IsFoodDistributorDesc = "IS_FOOD_DISTRIBUTOR_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: "Mutation";
  /** Creates a single `Delivery`. */
  createDelivery?: Maybe<CreateDeliveryPayload>;
  /** Creates a single `Driver`. */
  createDriver?: Maybe<CreateDriverPayload>;
  /** Creates a single `FoodDonor`. */
  createFoodDonor?: Maybe<CreateFoodDonorPayload>;
  /** Creates a single `Partner`. */
  createPartner?: Maybe<CreatePartnerPayload>;
  /** Creates a single `Pickup`. */
  createPickup?: Maybe<CreatePickupPayload>;
  /** Creates a single `Project`. */
  createProject?: Maybe<CreateProjectPayload>;
  /** Updates a single `Delivery` using a unique key and a patch. */
  updateDeliveryById?: Maybe<UpdateDeliveryPayload>;
  /** Updates a single `Driver` using a unique key and a patch. */
  updateDriverById?: Maybe<UpdateDriverPayload>;
  /** Updates a single `FoodDonor` using a unique key and a patch. */
  updateFoodDonorById?: Maybe<UpdateFoodDonorPayload>;
  /** Updates a single `Partner` using a unique key and a patch. */
  updatePartnerById?: Maybe<UpdatePartnerPayload>;
  /** Updates a single `Pickup` using a unique key and a patch. */
  updatePickupById?: Maybe<UpdatePickupPayload>;
  /** Updates a single `Project` using a unique key and a patch. */
  updateProjectById?: Maybe<UpdateProjectPayload>;
  /** Deletes a single `Delivery` using a unique key. */
  deleteDeliveryById?: Maybe<DeleteDeliveryPayload>;
  /** Deletes a single `Driver` using a unique key. */
  deleteDriverById?: Maybe<DeleteDriverPayload>;
  /** Deletes a single `FoodDonor` using a unique key. */
  deleteFoodDonorById?: Maybe<DeleteFoodDonorPayload>;
  /** Deletes a single `Partner` using a unique key. */
  deletePartnerById?: Maybe<DeletePartnerPayload>;
  /** Deletes a single `Pickup` using a unique key. */
  deletePickupById?: Maybe<DeletePickupPayload>;
  /** Deletes a single `Project` using a unique key. */
  deleteProjectById?: Maybe<DeleteProjectPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDeliveryArgs = {
  input: CreateDeliveryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDriverArgs = {
  input: CreateDriverInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFoodDonorArgs = {
  input: CreateFoodDonorInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePartnerArgs = {
  input: CreatePartnerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePickupArgs = {
  input: CreatePickupInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDeliveryByIdArgs = {
  input: UpdateDeliveryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDriverByIdArgs = {
  input: UpdateDriverByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFoodDonorByIdArgs = {
  input: UpdateFoodDonorByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePartnerByIdArgs = {
  input: UpdatePartnerByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePickupByIdArgs = {
  input: UpdatePickupByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProjectByIdArgs = {
  input: UpdateProjectByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDeliveryByIdArgs = {
  input: DeleteDeliveryByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDriverByIdArgs = {
  input: DeleteDriverByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFoodDonorByIdArgs = {
  input: DeleteFoodDonorByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePartnerByIdArgs = {
  input: DeletePartnerByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePickupByIdArgs = {
  input: DeletePickupByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProjectByIdArgs = {
  input: DeleteProjectByIdInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["Cursor"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["Cursor"]>;
};

export type Partner = {
  __typename?: "Partner";
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  vanNumber?: Maybe<Scalars["String"]>;
  /** Reads and enables pagination through a set of `Pickup`. */
  pickupsByPartnerId: PickupsConnection;
  /** Reads and enables pagination through a set of `Delivery`. */
  deliveriesByPartnerId: DeliveriesConnection;
};

export type PartnerPickupsByPartnerIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<PickupsOrderBy>>;
  condition?: Maybe<PickupCondition>;
};

export type PartnerDeliveriesByPartnerIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<DeliveriesOrderBy>>;
  condition?: Maybe<DeliveryCondition>;
};

/** A condition to be used against `Partner` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PartnerCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `vanNumber` field. */
  vanNumber?: Maybe<Scalars["String"]>;
};

/** An input for mutations affecting `Partner` */
export type PartnerInput = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  vanNumber?: Maybe<Scalars["String"]>;
};

/** Represents an update to a `Partner`. Fields that are set will be updated. */
export type PartnerPatch = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  vanNumber?: Maybe<Scalars["String"]>;
};

/** A connection to a list of `Partner` values. */
export type PartnersConnection = {
  __typename?: "PartnersConnection";
  /** A list of `Partner` objects. */
  nodes: Array<Maybe<Partner>>;
  /** A list of edges which contains the `Partner` and cursor to aid in pagination. */
  edges: Array<PartnersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Partner` you could get from the connection. */
  totalCount: Scalars["Int"];
};

/** A `Partner` edge in the connection. */
export type PartnersEdge = {
  __typename?: "PartnersEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `Partner` at the end of the edge. */
  node?: Maybe<Partner>;
};

/** Methods to use when ordering `Partner`. */
export enum PartnersOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  VanNumberAsc = "VAN_NUMBER_ASC",
  VanNumberDesc = "VAN_NUMBER_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type Pickup = {
  __typename?: "Pickup";
  id: Scalars["Int"];
  projectId?: Maybe<Scalars["Int"]>;
  driverId?: Maybe<Scalars["Int"]>;
  partnerId?: Maybe<Scalars["Int"]>;
  datePickedUp?: Maybe<Scalars["Date"]>;
  totalMeals?: Maybe<Scalars["Float"]>;
  totalKg?: Maybe<Scalars["Float"]>;
  fruitAndVegKg?: Maybe<Scalars["Float"]>;
  meatAndPoultryKg?: Maybe<Scalars["Float"]>;
  dairyItemsKg?: Maybe<Scalars["Float"]>;
  frozenFoodKg?: Maybe<Scalars["Float"]>;
  snacksAndBakedGoodsKg?: Maybe<Scalars["Float"]>;
  personalCareItemsKg?: Maybe<Scalars["Float"]>;
  pantryAndGroceryItemsKg?: Maybe<Scalars["Float"]>;
  freshPreparedMealsKg?: Maybe<Scalars["Float"]>;
  deliItemsKg?: Maybe<Scalars["Float"]>;
  drinksKg?: Maybe<Scalars["Float"]>;
  /** Reads a single `Project` that is related to this `Pickup`. */
  projectByProjectId?: Maybe<Project>;
  /** Reads a single `Driver` that is related to this `Pickup`. */
  driverByDriverId?: Maybe<Driver>;
  /** Reads a single `Partner` that is related to this `Pickup`. */
  partnerByPartnerId?: Maybe<Partner>;
};

/** A condition to be used against `Pickup` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PickupCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `projectId` field. */
  projectId?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `driverId` field. */
  driverId?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `partnerId` field. */
  partnerId?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `datePickedUp` field. */
  datePickedUp?: Maybe<Scalars["Date"]>;
  /** Checks for equality with the object’s `totalMeals` field. */
  totalMeals?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `totalKg` field. */
  totalKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `fruitAndVegKg` field. */
  fruitAndVegKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `meatAndPoultryKg` field. */
  meatAndPoultryKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `dairyItemsKg` field. */
  dairyItemsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `frozenFoodKg` field. */
  frozenFoodKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `snacksAndBakedGoodsKg` field. */
  snacksAndBakedGoodsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `personalCareItemsKg` field. */
  personalCareItemsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `pantryAndGroceryItemsKg` field. */
  pantryAndGroceryItemsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `freshPreparedMealsKg` field. */
  freshPreparedMealsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `deliItemsKg` field. */
  deliItemsKg?: Maybe<Scalars["Float"]>;
  /** Checks for equality with the object’s `drinksKg` field. */
  drinksKg?: Maybe<Scalars["Float"]>;
};

/** An input for mutations affecting `Pickup` */
export type PickupInput = {
  id?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  driverId?: Maybe<Scalars["Int"]>;
  partnerId?: Maybe<Scalars["Int"]>;
  datePickedUp?: Maybe<Scalars["Date"]>;
  totalMeals?: Maybe<Scalars["Float"]>;
  totalKg?: Maybe<Scalars["Float"]>;
  fruitAndVegKg?: Maybe<Scalars["Float"]>;
  meatAndPoultryKg?: Maybe<Scalars["Float"]>;
  dairyItemsKg?: Maybe<Scalars["Float"]>;
  frozenFoodKg?: Maybe<Scalars["Float"]>;
  snacksAndBakedGoodsKg?: Maybe<Scalars["Float"]>;
  personalCareItemsKg?: Maybe<Scalars["Float"]>;
  pantryAndGroceryItemsKg?: Maybe<Scalars["Float"]>;
  freshPreparedMealsKg?: Maybe<Scalars["Float"]>;
  deliItemsKg?: Maybe<Scalars["Float"]>;
  drinksKg?: Maybe<Scalars["Float"]>;
};

/** Represents an update to a `Pickup`. Fields that are set will be updated. */
export type PickupPatch = {
  id?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  driverId?: Maybe<Scalars["Int"]>;
  partnerId?: Maybe<Scalars["Int"]>;
  datePickedUp?: Maybe<Scalars["Date"]>;
  totalMeals?: Maybe<Scalars["Float"]>;
  totalKg?: Maybe<Scalars["Float"]>;
  fruitAndVegKg?: Maybe<Scalars["Float"]>;
  meatAndPoultryKg?: Maybe<Scalars["Float"]>;
  dairyItemsKg?: Maybe<Scalars["Float"]>;
  frozenFoodKg?: Maybe<Scalars["Float"]>;
  snacksAndBakedGoodsKg?: Maybe<Scalars["Float"]>;
  personalCareItemsKg?: Maybe<Scalars["Float"]>;
  pantryAndGroceryItemsKg?: Maybe<Scalars["Float"]>;
  freshPreparedMealsKg?: Maybe<Scalars["Float"]>;
  deliItemsKg?: Maybe<Scalars["Float"]>;
  drinksKg?: Maybe<Scalars["Float"]>;
};

/** A connection to a list of `Pickup` values. */
export type PickupsConnection = {
  __typename?: "PickupsConnection";
  /** A list of `Pickup` objects. */
  nodes: Array<Maybe<Pickup>>;
  /** A list of edges which contains the `Pickup` and cursor to aid in pagination. */
  edges: Array<PickupsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Pickup` you could get from the connection. */
  totalCount: Scalars["Int"];
};

/** A `Pickup` edge in the connection. */
export type PickupsEdge = {
  __typename?: "PickupsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `Pickup` at the end of the edge. */
  node?: Maybe<Pickup>;
};

/** Methods to use when ordering `Pickup`. */
export enum PickupsOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  ProjectIdAsc = "PROJECT_ID_ASC",
  ProjectIdDesc = "PROJECT_ID_DESC",
  DriverIdAsc = "DRIVER_ID_ASC",
  DriverIdDesc = "DRIVER_ID_DESC",
  PartnerIdAsc = "PARTNER_ID_ASC",
  PartnerIdDesc = "PARTNER_ID_DESC",
  DatePickedUpAsc = "DATE_PICKED_UP_ASC",
  DatePickedUpDesc = "DATE_PICKED_UP_DESC",
  TotalMealsAsc = "TOTAL_MEALS_ASC",
  TotalMealsDesc = "TOTAL_MEALS_DESC",
  TotalKgAsc = "TOTAL_KG_ASC",
  TotalKgDesc = "TOTAL_KG_DESC",
  FruitAndVegKgAsc = "FRUIT_AND_VEG_KG_ASC",
  FruitAndVegKgDesc = "FRUIT_AND_VEG_KG_DESC",
  MeatAndPoultryKgAsc = "MEAT_AND_POULTRY_KG_ASC",
  MeatAndPoultryKgDesc = "MEAT_AND_POULTRY_KG_DESC",
  DairyItemsKgAsc = "DAIRY_ITEMS_KG_ASC",
  DairyItemsKgDesc = "DAIRY_ITEMS_KG_DESC",
  FrozenFoodKgAsc = "FROZEN_FOOD_KG_ASC",
  FrozenFoodKgDesc = "FROZEN_FOOD_KG_DESC",
  SnacksAndBakedGoodsKgAsc = "SNACKS_AND_BAKED_GOODS_KG_ASC",
  SnacksAndBakedGoodsKgDesc = "SNACKS_AND_BAKED_GOODS_KG_DESC",
  PersonalCareItemsKgAsc = "PERSONAL_CARE_ITEMS_KG_ASC",
  PersonalCareItemsKgDesc = "PERSONAL_CARE_ITEMS_KG_DESC",
  PantryAndGroceryItemsKgAsc = "PANTRY_AND_GROCERY_ITEMS_KG_ASC",
  PantryAndGroceryItemsKgDesc = "PANTRY_AND_GROCERY_ITEMS_KG_DESC",
  FreshPreparedMealsKgAsc = "FRESH_PREPARED_MEALS_KG_ASC",
  FreshPreparedMealsKgDesc = "FRESH_PREPARED_MEALS_KG_DESC",
  DeliItemsKgAsc = "DELI_ITEMS_KG_ASC",
  DeliItemsKgDesc = "DELI_ITEMS_KG_DESC",
  DrinksKgAsc = "DRINKS_KG_ASC",
  DrinksKgDesc = "DRINKS_KG_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type Project = {
  __typename?: "Project";
  id: Scalars["Int"];
  nature?: Maybe<Scalars["String"]>;
  primaryClientGroup?: Maybe<Scalars["String"]>;
  donorId?: Maybe<Scalars["Int"]>;
  /** Reads a single `FoodDonor` that is related to this `Project`. */
  foodDonorByDonorId?: Maybe<FoodDonor>;
  /** Reads and enables pagination through a set of `Pickup`. */
  pickupsByProjectId: PickupsConnection;
  /** Reads and enables pagination through a set of `Delivery`. */
  deliveriesByProjectId: DeliveriesConnection;
};

export type ProjectPickupsByProjectIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<PickupsOrderBy>>;
  condition?: Maybe<PickupCondition>;
};

export type ProjectDeliveriesByProjectIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<DeliveriesOrderBy>>;
  condition?: Maybe<DeliveryCondition>;
};

/** A condition to be used against `Project` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProjectCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `nature` field. */
  nature?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `primaryClientGroup` field. */
  primaryClientGroup?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `donorId` field. */
  donorId?: Maybe<Scalars["Int"]>;
};

/** An input for mutations affecting `Project` */
export type ProjectInput = {
  id?: Maybe<Scalars["Int"]>;
  nature?: Maybe<Scalars["String"]>;
  primaryClientGroup?: Maybe<Scalars["String"]>;
  donorId?: Maybe<Scalars["Int"]>;
};

/** Represents an update to a `Project`. Fields that are set will be updated. */
export type ProjectPatch = {
  id?: Maybe<Scalars["Int"]>;
  nature?: Maybe<Scalars["String"]>;
  primaryClientGroup?: Maybe<Scalars["String"]>;
  donorId?: Maybe<Scalars["Int"]>;
};

/** A connection to a list of `Project` values. */
export type ProjectsConnection = {
  __typename?: "ProjectsConnection";
  /** A list of `Project` objects. */
  nodes: Array<Maybe<Project>>;
  /** A list of edges which contains the `Project` and cursor to aid in pagination. */
  edges: Array<ProjectsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Project` you could get from the connection. */
  totalCount: Scalars["Int"];
};

/** A `Project` edge in the connection. */
export type ProjectsEdge = {
  __typename?: "ProjectsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `Project` at the end of the edge. */
  node?: Maybe<Project>;
};

/** Methods to use when ordering `Project`. */
export enum ProjectsOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NatureAsc = "NATURE_ASC",
  NatureDesc = "NATURE_DESC",
  PrimaryClientGroupAsc = "PRIMARY_CLIENT_GROUP_ASC",
  PrimaryClientGroupDesc = "PRIMARY_CLIENT_GROUP_DESC",
  DonorIdAsc = "DONOR_ID_ASC",
  DonorIdDesc = "DONOR_ID_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: "Query";
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads and enables pagination through a set of `Delivery`. */
  allDeliveries?: Maybe<DeliveriesConnection>;
  /** Reads and enables pagination through a set of `Driver`. */
  allDrivers?: Maybe<DriversConnection>;
  /** Reads and enables pagination through a set of `FoodDonor`. */
  allFoodDonors?: Maybe<FoodDonorsConnection>;
  /** Reads and enables pagination through a set of `Partner`. */
  allPartners?: Maybe<PartnersConnection>;
  /** Reads and enables pagination through a set of `Pickup`. */
  allPickups?: Maybe<PickupsConnection>;
  /** Reads and enables pagination through a set of `Project`. */
  allProjects?: Maybe<ProjectsConnection>;
  deliveryById?: Maybe<Delivery>;
  driverById?: Maybe<Driver>;
  foodDonorById?: Maybe<FoodDonor>;
  partnerById?: Maybe<Partner>;
  pickupById?: Maybe<Pickup>;
  projectById?: Maybe<Project>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllDeliveriesArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<DeliveriesOrderBy>>;
  condition?: Maybe<DeliveryCondition>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllDriversArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<DriversOrderBy>>;
  condition?: Maybe<DriverCondition>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllFoodDonorsArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<FoodDonorsOrderBy>>;
  condition?: Maybe<FoodDonorCondition>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllPartnersArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<PartnersOrderBy>>;
  condition?: Maybe<PartnerCondition>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllPickupsArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<PickupsOrderBy>>;
  condition?: Maybe<PickupCondition>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllProjectsArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ProjectsOrderBy>>;
  condition?: Maybe<ProjectCondition>;
};

/** The root query type which gives access points into the data universe. */
export type QueryDeliveryByIdArgs = {
  id: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryDriverByIdArgs = {
  id: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryFoodDonorByIdArgs = {
  id: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPartnerByIdArgs = {
  id: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPickupByIdArgs = {
  id: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryProjectByIdArgs = {
  id: Scalars["Int"];
};

/** All input for the `updateDeliveryById` mutation. */
export type UpdateDeliveryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `Delivery` being updated. */
  deliveryPatch: DeliveryPatch;
  id: Scalars["Int"];
};

/** The output of our update `Delivery` mutation. */
export type UpdateDeliveryPayload = {
  __typename?: "UpdateDeliveryPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Delivery` that was updated by this mutation. */
  delivery?: Maybe<Delivery>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Project` that is related to this `Delivery`. */
  projectByProjectId?: Maybe<Project>;
  /** Reads a single `Driver` that is related to this `Delivery`. */
  driverByDriverId?: Maybe<Driver>;
  /** Reads a single `Partner` that is related to this `Delivery`. */
  partnerByPartnerId?: Maybe<Partner>;
  /** An edge for our `Delivery`. May be used by Relay 1. */
  deliveryEdge?: Maybe<DeliveriesEdge>;
};

/** The output of our update `Delivery` mutation. */
export type UpdateDeliveryPayloadDeliveryEdgeArgs = {
  orderBy?: Maybe<Array<DeliveriesOrderBy>>;
};

/** All input for the `updateDriverById` mutation. */
export type UpdateDriverByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `Driver` being updated. */
  driverPatch: DriverPatch;
  id: Scalars["Int"];
};

/** The output of our update `Driver` mutation. */
export type UpdateDriverPayload = {
  __typename?: "UpdateDriverPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Driver` that was updated by this mutation. */
  driver?: Maybe<Driver>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Driver`. May be used by Relay 1. */
  driverEdge?: Maybe<DriversEdge>;
};

/** The output of our update `Driver` mutation. */
export type UpdateDriverPayloadDriverEdgeArgs = {
  orderBy?: Maybe<Array<DriversOrderBy>>;
};

/** All input for the `updateFoodDonorById` mutation. */
export type UpdateFoodDonorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `FoodDonor` being updated. */
  foodDonorPatch: FoodDonorPatch;
  id: Scalars["Int"];
};

/** The output of our update `FoodDonor` mutation. */
export type UpdateFoodDonorPayload = {
  __typename?: "UpdateFoodDonorPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `FoodDonor` that was updated by this mutation. */
  foodDonor?: Maybe<FoodDonor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `FoodDonor`. May be used by Relay 1. */
  foodDonorEdge?: Maybe<FoodDonorsEdge>;
};

/** The output of our update `FoodDonor` mutation. */
export type UpdateFoodDonorPayloadFoodDonorEdgeArgs = {
  orderBy?: Maybe<Array<FoodDonorsOrderBy>>;
};

/** All input for the `updatePartnerById` mutation. */
export type UpdatePartnerByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `Partner` being updated. */
  partnerPatch: PartnerPatch;
  id: Scalars["Int"];
};

/** The output of our update `Partner` mutation. */
export type UpdatePartnerPayload = {
  __typename?: "UpdatePartnerPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Partner` that was updated by this mutation. */
  partner?: Maybe<Partner>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Partner`. May be used by Relay 1. */
  partnerEdge?: Maybe<PartnersEdge>;
};

/** The output of our update `Partner` mutation. */
export type UpdatePartnerPayloadPartnerEdgeArgs = {
  orderBy?: Maybe<Array<PartnersOrderBy>>;
};

/** All input for the `updatePickupById` mutation. */
export type UpdatePickupByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `Pickup` being updated. */
  pickupPatch: PickupPatch;
  id: Scalars["Int"];
};

/** The output of our update `Pickup` mutation. */
export type UpdatePickupPayload = {
  __typename?: "UpdatePickupPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Pickup` that was updated by this mutation. */
  pickup?: Maybe<Pickup>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Project` that is related to this `Pickup`. */
  projectByProjectId?: Maybe<Project>;
  /** Reads a single `Driver` that is related to this `Pickup`. */
  driverByDriverId?: Maybe<Driver>;
  /** Reads a single `Partner` that is related to this `Pickup`. */
  partnerByPartnerId?: Maybe<Partner>;
  /** An edge for our `Pickup`. May be used by Relay 1. */
  pickupEdge?: Maybe<PickupsEdge>;
};

/** The output of our update `Pickup` mutation. */
export type UpdatePickupPayloadPickupEdgeArgs = {
  orderBy?: Maybe<Array<PickupsOrderBy>>;
};

/** All input for the `updateProjectById` mutation. */
export type UpdateProjectByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `Project` being updated. */
  projectPatch: ProjectPatch;
  id: Scalars["Int"];
};

/** The output of our update `Project` mutation. */
export type UpdateProjectPayload = {
  __typename?: "UpdateProjectPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Project` that was updated by this mutation. */
  project?: Maybe<Project>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `FoodDonor` that is related to this `Project`. */
  foodDonorByDonorId?: Maybe<FoodDonor>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectsEdge>;
};

/** The output of our update `Project` mutation. */
export type UpdateProjectPayloadProjectEdgeArgs = {
  orderBy?: Maybe<Array<ProjectsOrderBy>>;
};

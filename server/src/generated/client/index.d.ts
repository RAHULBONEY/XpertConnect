
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AspirantProfile
 * 
 */
export type AspirantProfile = $Result.DefaultSelection<Prisma.$AspirantProfilePayload>
/**
 * Model TutorProfile
 * 
 */
export type TutorProfile = $Result.DefaultSelection<Prisma.$TutorProfilePayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model LikedCourse
 * 
 */
export type LikedCourse = $Result.DefaultSelection<Prisma.$LikedCoursePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const UserRole: {
  ASPIRANT: 'ASPIRANT',
  TUTOR: 'TUTOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aspirantProfile`: Exposes CRUD operations for the **AspirantProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AspirantProfiles
    * const aspirantProfiles = await prisma.aspirantProfile.findMany()
    * ```
    */
  get aspirantProfile(): Prisma.AspirantProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorProfile`: Exposes CRUD operations for the **TutorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorProfiles
    * const tutorProfiles = await prisma.tutorProfile.findMany()
    * ```
    */
  get tutorProfile(): Prisma.TutorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likedCourse`: Exposes CRUD operations for the **LikedCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedCourses
    * const likedCourses = await prisma.likedCourse.findMany()
    * ```
    */
  get likedCourse(): Prisma.LikedCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AspirantProfile: 'AspirantProfile',
    TutorProfile: 'TutorProfile',
    Course: 'Course',
    Enrollment: 'Enrollment',
    LikedCourse: 'LikedCourse',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "aspirantProfile" | "tutorProfile" | "course" | "enrollment" | "likedCourse" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AspirantProfile: {
        payload: Prisma.$AspirantProfilePayload<ExtArgs>
        fields: Prisma.AspirantProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AspirantProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AspirantProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload>
          }
          findFirst: {
            args: Prisma.AspirantProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AspirantProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload>
          }
          findMany: {
            args: Prisma.AspirantProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload>[]
          }
          create: {
            args: Prisma.AspirantProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload>
          }
          createMany: {
            args: Prisma.AspirantProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AspirantProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload>[]
          }
          delete: {
            args: Prisma.AspirantProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload>
          }
          update: {
            args: Prisma.AspirantProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload>
          }
          deleteMany: {
            args: Prisma.AspirantProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AspirantProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AspirantProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload>[]
          }
          upsert: {
            args: Prisma.AspirantProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirantProfilePayload>
          }
          aggregate: {
            args: Prisma.AspirantProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAspirantProfile>
          }
          groupBy: {
            args: Prisma.AspirantProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<AspirantProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.AspirantProfileCountArgs<ExtArgs>
            result: $Utils.Optional<AspirantProfileCountAggregateOutputType> | number
          }
        }
      }
      TutorProfile: {
        payload: Prisma.$TutorProfilePayload<ExtArgs>
        fields: Prisma.TutorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          findFirst: {
            args: Prisma.TutorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          findMany: {
            args: Prisma.TutorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          create: {
            args: Prisma.TutorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          createMany: {
            args: Prisma.TutorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          delete: {
            args: Prisma.TutorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          update: {
            args: Prisma.TutorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          deleteMany: {
            args: Prisma.TutorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          upsert: {
            args: Prisma.TutorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          aggregate: {
            args: Prisma.TutorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorProfile>
          }
          groupBy: {
            args: Prisma.TutorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TutorProfileCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      LikedCourse: {
        payload: Prisma.$LikedCoursePayload<ExtArgs>
        fields: Prisma.LikedCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload>
          }
          findFirst: {
            args: Prisma.LikedCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload>
          }
          findMany: {
            args: Prisma.LikedCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload>[]
          }
          create: {
            args: Prisma.LikedCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload>
          }
          createMany: {
            args: Prisma.LikedCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload>[]
          }
          delete: {
            args: Prisma.LikedCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload>
          }
          update: {
            args: Prisma.LikedCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload>
          }
          deleteMany: {
            args: Prisma.LikedCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikedCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload>[]
          }
          upsert: {
            args: Prisma.LikedCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedCoursePayload>
          }
          aggregate: {
            args: Prisma.LikedCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedCourse>
          }
          groupBy: {
            args: Prisma.LikedCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedCourseCountArgs<ExtArgs>
            result: $Utils.Optional<LikedCourseCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    aspirantProfile?: AspirantProfileOmit
    tutorProfile?: TutorProfileOmit
    course?: CourseOmit
    enrollment?: EnrollmentOmit
    likedCourse?: LikedCourseOmit
    booking?: BookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    enrollments: number
    likedCourses: number
    bookingsAsAspirant: number
    bookingsAsTutor: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    likedCourses?: boolean | UserCountOutputTypeCountLikedCoursesArgs
    bookingsAsAspirant?: boolean | UserCountOutputTypeCountBookingsAsAspirantArgs
    bookingsAsTutor?: boolean | UserCountOutputTypeCountBookingsAsTutorArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedCourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsAsAspirantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsAsTutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type TutorProfileCountOutputType
   */

  export type TutorProfileCountOutputType = {
    courses: number
  }

  export type TutorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | TutorProfileCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfileCountOutputType
     */
    select?: TutorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    enrollments: number
    likedBy: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs
    likedBy?: boolean | CourseCountOutputTypeCountLikedByArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedCourseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    resetPasswordToken: number
    resetPasswordExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    aspirantProfile?: boolean | User$aspirantProfileArgs<ExtArgs>
    tutorProfile?: boolean | User$tutorProfileArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    likedCourses?: boolean | User$likedCoursesArgs<ExtArgs>
    bookingsAsAspirant?: boolean | User$bookingsAsAspirantArgs<ExtArgs>
    bookingsAsTutor?: boolean | User$bookingsAsTutorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "role" | "createdAt" | "updatedAt" | "resetPasswordToken" | "resetPasswordExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aspirantProfile?: boolean | User$aspirantProfileArgs<ExtArgs>
    tutorProfile?: boolean | User$tutorProfileArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    likedCourses?: boolean | User$likedCoursesArgs<ExtArgs>
    bookingsAsAspirant?: boolean | User$bookingsAsAspirantArgs<ExtArgs>
    bookingsAsTutor?: boolean | User$bookingsAsTutorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      aspirantProfile: Prisma.$AspirantProfilePayload<ExtArgs> | null
      tutorProfile: Prisma.$TutorProfilePayload<ExtArgs> | null
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      likedCourses: Prisma.$LikedCoursePayload<ExtArgs>[]
      bookingsAsAspirant: Prisma.$BookingPayload<ExtArgs>[]
      bookingsAsTutor: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      passwordHash: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      resetPasswordToken: string | null
      resetPasswordExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aspirantProfile<T extends User$aspirantProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$aspirantProfileArgs<ExtArgs>>): Prisma__AspirantProfileClient<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tutorProfile<T extends User$tutorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$tutorProfileArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedCourses<T extends User$likedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$likedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingsAsAspirant<T extends User$bookingsAsAspirantArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsAsAspirantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingsAsTutor<T extends User$bookingsAsTutorArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsAsTutorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.aspirantProfile
   */
  export type User$aspirantProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
    where?: AspirantProfileWhereInput
  }

  /**
   * User.tutorProfile
   */
  export type User$tutorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    where?: TutorProfileWhereInput
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.likedCourses
   */
  export type User$likedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    where?: LikedCourseWhereInput
    orderBy?: LikedCourseOrderByWithRelationInput | LikedCourseOrderByWithRelationInput[]
    cursor?: LikedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedCourseScalarFieldEnum | LikedCourseScalarFieldEnum[]
  }

  /**
   * User.bookingsAsAspirant
   */
  export type User$bookingsAsAspirantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.bookingsAsTutor
   */
  export type User$bookingsAsTutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AspirantProfile
   */

  export type AggregateAspirantProfile = {
    _count: AspirantProfileCountAggregateOutputType | null
    _min: AspirantProfileMinAggregateOutputType | null
    _max: AspirantProfileMaxAggregateOutputType | null
  }

  export type AspirantProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AspirantProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AspirantProfileCountAggregateOutputType = {
    id: number
    userId: number
    interests: number
    skills: number
    learningGoals: number
    _all: number
  }


  export type AspirantProfileMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AspirantProfileMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AspirantProfileCountAggregateInputType = {
    id?: true
    userId?: true
    interests?: true
    skills?: true
    learningGoals?: true
    _all?: true
  }

  export type AspirantProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspirantProfile to aggregate.
     */
    where?: AspirantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspirantProfiles to fetch.
     */
    orderBy?: AspirantProfileOrderByWithRelationInput | AspirantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AspirantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspirantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspirantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AspirantProfiles
    **/
    _count?: true | AspirantProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AspirantProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AspirantProfileMaxAggregateInputType
  }

  export type GetAspirantProfileAggregateType<T extends AspirantProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateAspirantProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAspirantProfile[P]>
      : GetScalarType<T[P], AggregateAspirantProfile[P]>
  }




  export type AspirantProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspirantProfileWhereInput
    orderBy?: AspirantProfileOrderByWithAggregationInput | AspirantProfileOrderByWithAggregationInput[]
    by: AspirantProfileScalarFieldEnum[] | AspirantProfileScalarFieldEnum
    having?: AspirantProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AspirantProfileCountAggregateInputType | true
    _min?: AspirantProfileMinAggregateInputType
    _max?: AspirantProfileMaxAggregateInputType
  }

  export type AspirantProfileGroupByOutputType = {
    id: string
    userId: string
    interests: string[]
    skills: string[]
    learningGoals: string[]
    _count: AspirantProfileCountAggregateOutputType | null
    _min: AspirantProfileMinAggregateOutputType | null
    _max: AspirantProfileMaxAggregateOutputType | null
  }

  type GetAspirantProfileGroupByPayload<T extends AspirantProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AspirantProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AspirantProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AspirantProfileGroupByOutputType[P]>
            : GetScalarType<T[P], AspirantProfileGroupByOutputType[P]>
        }
      >
    >


  export type AspirantProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    interests?: boolean
    skills?: boolean
    learningGoals?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspirantProfile"]>

  export type AspirantProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    interests?: boolean
    skills?: boolean
    learningGoals?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspirantProfile"]>

  export type AspirantProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    interests?: boolean
    skills?: boolean
    learningGoals?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspirantProfile"]>

  export type AspirantProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    interests?: boolean
    skills?: boolean
    learningGoals?: boolean
  }

  export type AspirantProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "interests" | "skills" | "learningGoals", ExtArgs["result"]["aspirantProfile"]>
  export type AspirantProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AspirantProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AspirantProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AspirantProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AspirantProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      interests: string[]
      skills: string[]
      learningGoals: string[]
    }, ExtArgs["result"]["aspirantProfile"]>
    composites: {}
  }

  type AspirantProfileGetPayload<S extends boolean | null | undefined | AspirantProfileDefaultArgs> = $Result.GetResult<Prisma.$AspirantProfilePayload, S>

  type AspirantProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AspirantProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AspirantProfileCountAggregateInputType | true
    }

  export interface AspirantProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AspirantProfile'], meta: { name: 'AspirantProfile' } }
    /**
     * Find zero or one AspirantProfile that matches the filter.
     * @param {AspirantProfileFindUniqueArgs} args - Arguments to find a AspirantProfile
     * @example
     * // Get one AspirantProfile
     * const aspirantProfile = await prisma.aspirantProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AspirantProfileFindUniqueArgs>(args: SelectSubset<T, AspirantProfileFindUniqueArgs<ExtArgs>>): Prisma__AspirantProfileClient<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AspirantProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AspirantProfileFindUniqueOrThrowArgs} args - Arguments to find a AspirantProfile
     * @example
     * // Get one AspirantProfile
     * const aspirantProfile = await prisma.aspirantProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AspirantProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, AspirantProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AspirantProfileClient<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AspirantProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirantProfileFindFirstArgs} args - Arguments to find a AspirantProfile
     * @example
     * // Get one AspirantProfile
     * const aspirantProfile = await prisma.aspirantProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AspirantProfileFindFirstArgs>(args?: SelectSubset<T, AspirantProfileFindFirstArgs<ExtArgs>>): Prisma__AspirantProfileClient<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AspirantProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirantProfileFindFirstOrThrowArgs} args - Arguments to find a AspirantProfile
     * @example
     * // Get one AspirantProfile
     * const aspirantProfile = await prisma.aspirantProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AspirantProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, AspirantProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__AspirantProfileClient<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AspirantProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirantProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AspirantProfiles
     * const aspirantProfiles = await prisma.aspirantProfile.findMany()
     * 
     * // Get first 10 AspirantProfiles
     * const aspirantProfiles = await prisma.aspirantProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aspirantProfileWithIdOnly = await prisma.aspirantProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AspirantProfileFindManyArgs>(args?: SelectSubset<T, AspirantProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AspirantProfile.
     * @param {AspirantProfileCreateArgs} args - Arguments to create a AspirantProfile.
     * @example
     * // Create one AspirantProfile
     * const AspirantProfile = await prisma.aspirantProfile.create({
     *   data: {
     *     // ... data to create a AspirantProfile
     *   }
     * })
     * 
     */
    create<T extends AspirantProfileCreateArgs>(args: SelectSubset<T, AspirantProfileCreateArgs<ExtArgs>>): Prisma__AspirantProfileClient<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AspirantProfiles.
     * @param {AspirantProfileCreateManyArgs} args - Arguments to create many AspirantProfiles.
     * @example
     * // Create many AspirantProfiles
     * const aspirantProfile = await prisma.aspirantProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AspirantProfileCreateManyArgs>(args?: SelectSubset<T, AspirantProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AspirantProfiles and returns the data saved in the database.
     * @param {AspirantProfileCreateManyAndReturnArgs} args - Arguments to create many AspirantProfiles.
     * @example
     * // Create many AspirantProfiles
     * const aspirantProfile = await prisma.aspirantProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AspirantProfiles and only return the `id`
     * const aspirantProfileWithIdOnly = await prisma.aspirantProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AspirantProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, AspirantProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AspirantProfile.
     * @param {AspirantProfileDeleteArgs} args - Arguments to delete one AspirantProfile.
     * @example
     * // Delete one AspirantProfile
     * const AspirantProfile = await prisma.aspirantProfile.delete({
     *   where: {
     *     // ... filter to delete one AspirantProfile
     *   }
     * })
     * 
     */
    delete<T extends AspirantProfileDeleteArgs>(args: SelectSubset<T, AspirantProfileDeleteArgs<ExtArgs>>): Prisma__AspirantProfileClient<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AspirantProfile.
     * @param {AspirantProfileUpdateArgs} args - Arguments to update one AspirantProfile.
     * @example
     * // Update one AspirantProfile
     * const aspirantProfile = await prisma.aspirantProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AspirantProfileUpdateArgs>(args: SelectSubset<T, AspirantProfileUpdateArgs<ExtArgs>>): Prisma__AspirantProfileClient<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AspirantProfiles.
     * @param {AspirantProfileDeleteManyArgs} args - Arguments to filter AspirantProfiles to delete.
     * @example
     * // Delete a few AspirantProfiles
     * const { count } = await prisma.aspirantProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AspirantProfileDeleteManyArgs>(args?: SelectSubset<T, AspirantProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AspirantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirantProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AspirantProfiles
     * const aspirantProfile = await prisma.aspirantProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AspirantProfileUpdateManyArgs>(args: SelectSubset<T, AspirantProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AspirantProfiles and returns the data updated in the database.
     * @param {AspirantProfileUpdateManyAndReturnArgs} args - Arguments to update many AspirantProfiles.
     * @example
     * // Update many AspirantProfiles
     * const aspirantProfile = await prisma.aspirantProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AspirantProfiles and only return the `id`
     * const aspirantProfileWithIdOnly = await prisma.aspirantProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AspirantProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, AspirantProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AspirantProfile.
     * @param {AspirantProfileUpsertArgs} args - Arguments to update or create a AspirantProfile.
     * @example
     * // Update or create a AspirantProfile
     * const aspirantProfile = await prisma.aspirantProfile.upsert({
     *   create: {
     *     // ... data to create a AspirantProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AspirantProfile we want to update
     *   }
     * })
     */
    upsert<T extends AspirantProfileUpsertArgs>(args: SelectSubset<T, AspirantProfileUpsertArgs<ExtArgs>>): Prisma__AspirantProfileClient<$Result.GetResult<Prisma.$AspirantProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AspirantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirantProfileCountArgs} args - Arguments to filter AspirantProfiles to count.
     * @example
     * // Count the number of AspirantProfiles
     * const count = await prisma.aspirantProfile.count({
     *   where: {
     *     // ... the filter for the AspirantProfiles we want to count
     *   }
     * })
    **/
    count<T extends AspirantProfileCountArgs>(
      args?: Subset<T, AspirantProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AspirantProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AspirantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirantProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AspirantProfileAggregateArgs>(args: Subset<T, AspirantProfileAggregateArgs>): Prisma.PrismaPromise<GetAspirantProfileAggregateType<T>>

    /**
     * Group by AspirantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirantProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AspirantProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AspirantProfileGroupByArgs['orderBy'] }
        : { orderBy?: AspirantProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AspirantProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAspirantProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AspirantProfile model
   */
  readonly fields: AspirantProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AspirantProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AspirantProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AspirantProfile model
   */
  interface AspirantProfileFieldRefs {
    readonly id: FieldRef<"AspirantProfile", 'String'>
    readonly userId: FieldRef<"AspirantProfile", 'String'>
    readonly interests: FieldRef<"AspirantProfile", 'String[]'>
    readonly skills: FieldRef<"AspirantProfile", 'String[]'>
    readonly learningGoals: FieldRef<"AspirantProfile", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * AspirantProfile findUnique
   */
  export type AspirantProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
    /**
     * Filter, which AspirantProfile to fetch.
     */
    where: AspirantProfileWhereUniqueInput
  }

  /**
   * AspirantProfile findUniqueOrThrow
   */
  export type AspirantProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
    /**
     * Filter, which AspirantProfile to fetch.
     */
    where: AspirantProfileWhereUniqueInput
  }

  /**
   * AspirantProfile findFirst
   */
  export type AspirantProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
    /**
     * Filter, which AspirantProfile to fetch.
     */
    where?: AspirantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspirantProfiles to fetch.
     */
    orderBy?: AspirantProfileOrderByWithRelationInput | AspirantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspirantProfiles.
     */
    cursor?: AspirantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspirantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspirantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspirantProfiles.
     */
    distinct?: AspirantProfileScalarFieldEnum | AspirantProfileScalarFieldEnum[]
  }

  /**
   * AspirantProfile findFirstOrThrow
   */
  export type AspirantProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
    /**
     * Filter, which AspirantProfile to fetch.
     */
    where?: AspirantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspirantProfiles to fetch.
     */
    orderBy?: AspirantProfileOrderByWithRelationInput | AspirantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspirantProfiles.
     */
    cursor?: AspirantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspirantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspirantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspirantProfiles.
     */
    distinct?: AspirantProfileScalarFieldEnum | AspirantProfileScalarFieldEnum[]
  }

  /**
   * AspirantProfile findMany
   */
  export type AspirantProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
    /**
     * Filter, which AspirantProfiles to fetch.
     */
    where?: AspirantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspirantProfiles to fetch.
     */
    orderBy?: AspirantProfileOrderByWithRelationInput | AspirantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AspirantProfiles.
     */
    cursor?: AspirantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspirantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspirantProfiles.
     */
    skip?: number
    distinct?: AspirantProfileScalarFieldEnum | AspirantProfileScalarFieldEnum[]
  }

  /**
   * AspirantProfile create
   */
  export type AspirantProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a AspirantProfile.
     */
    data: XOR<AspirantProfileCreateInput, AspirantProfileUncheckedCreateInput>
  }

  /**
   * AspirantProfile createMany
   */
  export type AspirantProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AspirantProfiles.
     */
    data: AspirantProfileCreateManyInput | AspirantProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AspirantProfile createManyAndReturn
   */
  export type AspirantProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * The data used to create many AspirantProfiles.
     */
    data: AspirantProfileCreateManyInput | AspirantProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AspirantProfile update
   */
  export type AspirantProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a AspirantProfile.
     */
    data: XOR<AspirantProfileUpdateInput, AspirantProfileUncheckedUpdateInput>
    /**
     * Choose, which AspirantProfile to update.
     */
    where: AspirantProfileWhereUniqueInput
  }

  /**
   * AspirantProfile updateMany
   */
  export type AspirantProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AspirantProfiles.
     */
    data: XOR<AspirantProfileUpdateManyMutationInput, AspirantProfileUncheckedUpdateManyInput>
    /**
     * Filter which AspirantProfiles to update
     */
    where?: AspirantProfileWhereInput
    /**
     * Limit how many AspirantProfiles to update.
     */
    limit?: number
  }

  /**
   * AspirantProfile updateManyAndReturn
   */
  export type AspirantProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * The data used to update AspirantProfiles.
     */
    data: XOR<AspirantProfileUpdateManyMutationInput, AspirantProfileUncheckedUpdateManyInput>
    /**
     * Filter which AspirantProfiles to update
     */
    where?: AspirantProfileWhereInput
    /**
     * Limit how many AspirantProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AspirantProfile upsert
   */
  export type AspirantProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the AspirantProfile to update in case it exists.
     */
    where: AspirantProfileWhereUniqueInput
    /**
     * In case the AspirantProfile found by the `where` argument doesn't exist, create a new AspirantProfile with this data.
     */
    create: XOR<AspirantProfileCreateInput, AspirantProfileUncheckedCreateInput>
    /**
     * In case the AspirantProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AspirantProfileUpdateInput, AspirantProfileUncheckedUpdateInput>
  }

  /**
   * AspirantProfile delete
   */
  export type AspirantProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
    /**
     * Filter which AspirantProfile to delete.
     */
    where: AspirantProfileWhereUniqueInput
  }

  /**
   * AspirantProfile deleteMany
   */
  export type AspirantProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspirantProfiles to delete
     */
    where?: AspirantProfileWhereInput
    /**
     * Limit how many AspirantProfiles to delete.
     */
    limit?: number
  }

  /**
   * AspirantProfile without action
   */
  export type AspirantProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirantProfile
     */
    select?: AspirantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirantProfile
     */
    omit?: AspirantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirantProfileInclude<ExtArgs> | null
  }


  /**
   * Model TutorProfile
   */

  export type AggregateTutorProfile = {
    _count: TutorProfileCountAggregateOutputType | null
    _avg: TutorProfileAvgAggregateOutputType | null
    _sum: TutorProfileSumAggregateOutputType | null
    _min: TutorProfileMinAggregateOutputType | null
    _max: TutorProfileMaxAggregateOutputType | null
  }

  export type TutorProfileAvgAggregateOutputType = {
    hourlyRate: number | null
  }

  export type TutorProfileSumAggregateOutputType = {
    hourlyRate: number | null
  }

  export type TutorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    headline: string | null
    bio: string | null
    hourlyRate: number | null
  }

  export type TutorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    headline: string | null
    bio: string | null
    hourlyRate: number | null
  }

  export type TutorProfileCountAggregateOutputType = {
    id: number
    userId: number
    headline: number
    bio: number
    hourlyRate: number
    specialties: number
    _all: number
  }


  export type TutorProfileAvgAggregateInputType = {
    hourlyRate?: true
  }

  export type TutorProfileSumAggregateInputType = {
    hourlyRate?: true
  }

  export type TutorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    headline?: true
    bio?: true
    hourlyRate?: true
  }

  export type TutorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    headline?: true
    bio?: true
    hourlyRate?: true
  }

  export type TutorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    headline?: true
    bio?: true
    hourlyRate?: true
    specialties?: true
    _all?: true
  }

  export type TutorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorProfile to aggregate.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorProfiles
    **/
    _count?: true | TutorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorProfileMaxAggregateInputType
  }

  export type GetTutorProfileAggregateType<T extends TutorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorProfile[P]>
      : GetScalarType<T[P], AggregateTutorProfile[P]>
  }




  export type TutorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorProfileWhereInput
    orderBy?: TutorProfileOrderByWithAggregationInput | TutorProfileOrderByWithAggregationInput[]
    by: TutorProfileScalarFieldEnum[] | TutorProfileScalarFieldEnum
    having?: TutorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorProfileCountAggregateInputType | true
    _avg?: TutorProfileAvgAggregateInputType
    _sum?: TutorProfileSumAggregateInputType
    _min?: TutorProfileMinAggregateInputType
    _max?: TutorProfileMaxAggregateInputType
  }

  export type TutorProfileGroupByOutputType = {
    id: string
    userId: string
    headline: string
    bio: string
    hourlyRate: number
    specialties: string[]
    _count: TutorProfileCountAggregateOutputType | null
    _avg: TutorProfileAvgAggregateOutputType | null
    _sum: TutorProfileSumAggregateOutputType | null
    _min: TutorProfileMinAggregateOutputType | null
    _max: TutorProfileMaxAggregateOutputType | null
  }

  type GetTutorProfileGroupByPayload<T extends TutorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TutorProfileGroupByOutputType[P]>
        }
      >
    >


  export type TutorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    headline?: boolean
    bio?: boolean
    hourlyRate?: boolean
    specialties?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courses?: boolean | TutorProfile$coursesArgs<ExtArgs>
    _count?: boolean | TutorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    headline?: boolean
    bio?: boolean
    hourlyRate?: boolean
    specialties?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    headline?: boolean
    bio?: boolean
    hourlyRate?: boolean
    specialties?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    headline?: boolean
    bio?: boolean
    hourlyRate?: boolean
    specialties?: boolean
  }

  export type TutorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "headline" | "bio" | "hourlyRate" | "specialties", ExtArgs["result"]["tutorProfile"]>
  export type TutorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courses?: boolean | TutorProfile$coursesArgs<ExtArgs>
    _count?: boolean | TutorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TutorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TutorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TutorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      headline: string
      bio: string
      hourlyRate: number
      specialties: string[]
    }, ExtArgs["result"]["tutorProfile"]>
    composites: {}
  }

  type TutorProfileGetPayload<S extends boolean | null | undefined | TutorProfileDefaultArgs> = $Result.GetResult<Prisma.$TutorProfilePayload, S>

  type TutorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorProfileCountAggregateInputType | true
    }

  export interface TutorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorProfile'], meta: { name: 'TutorProfile' } }
    /**
     * Find zero or one TutorProfile that matches the filter.
     * @param {TutorProfileFindUniqueArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorProfileFindUniqueArgs>(args: SelectSubset<T, TutorProfileFindUniqueArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorProfileFindUniqueOrThrowArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindFirstArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorProfileFindFirstArgs>(args?: SelectSubset<T, TutorProfileFindFirstArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindFirstOrThrowArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorProfiles
     * const tutorProfiles = await prisma.tutorProfile.findMany()
     * 
     * // Get first 10 TutorProfiles
     * const tutorProfiles = await prisma.tutorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorProfileFindManyArgs>(args?: SelectSubset<T, TutorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorProfile.
     * @param {TutorProfileCreateArgs} args - Arguments to create a TutorProfile.
     * @example
     * // Create one TutorProfile
     * const TutorProfile = await prisma.tutorProfile.create({
     *   data: {
     *     // ... data to create a TutorProfile
     *   }
     * })
     * 
     */
    create<T extends TutorProfileCreateArgs>(args: SelectSubset<T, TutorProfileCreateArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorProfiles.
     * @param {TutorProfileCreateManyArgs} args - Arguments to create many TutorProfiles.
     * @example
     * // Create many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorProfileCreateManyArgs>(args?: SelectSubset<T, TutorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorProfiles and returns the data saved in the database.
     * @param {TutorProfileCreateManyAndReturnArgs} args - Arguments to create many TutorProfiles.
     * @example
     * // Create many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorProfiles and only return the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorProfile.
     * @param {TutorProfileDeleteArgs} args - Arguments to delete one TutorProfile.
     * @example
     * // Delete one TutorProfile
     * const TutorProfile = await prisma.tutorProfile.delete({
     *   where: {
     *     // ... filter to delete one TutorProfile
     *   }
     * })
     * 
     */
    delete<T extends TutorProfileDeleteArgs>(args: SelectSubset<T, TutorProfileDeleteArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorProfile.
     * @param {TutorProfileUpdateArgs} args - Arguments to update one TutorProfile.
     * @example
     * // Update one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorProfileUpdateArgs>(args: SelectSubset<T, TutorProfileUpdateArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorProfiles.
     * @param {TutorProfileDeleteManyArgs} args - Arguments to filter TutorProfiles to delete.
     * @example
     * // Delete a few TutorProfiles
     * const { count } = await prisma.tutorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorProfileDeleteManyArgs>(args?: SelectSubset<T, TutorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorProfileUpdateManyArgs>(args: SelectSubset<T, TutorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorProfiles and returns the data updated in the database.
     * @param {TutorProfileUpdateManyAndReturnArgs} args - Arguments to update many TutorProfiles.
     * @example
     * // Update many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorProfiles and only return the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TutorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorProfile.
     * @param {TutorProfileUpsertArgs} args - Arguments to update or create a TutorProfile.
     * @example
     * // Update or create a TutorProfile
     * const tutorProfile = await prisma.tutorProfile.upsert({
     *   create: {
     *     // ... data to create a TutorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorProfile we want to update
     *   }
     * })
     */
    upsert<T extends TutorProfileUpsertArgs>(args: SelectSubset<T, TutorProfileUpsertArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileCountArgs} args - Arguments to filter TutorProfiles to count.
     * @example
     * // Count the number of TutorProfiles
     * const count = await prisma.tutorProfile.count({
     *   where: {
     *     // ... the filter for the TutorProfiles we want to count
     *   }
     * })
    **/
    count<T extends TutorProfileCountArgs>(
      args?: Subset<T, TutorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TutorProfileAggregateArgs>(args: Subset<T, TutorProfileAggregateArgs>): Prisma.PrismaPromise<GetTutorProfileAggregateType<T>>

    /**
     * Group by TutorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TutorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorProfileGroupByArgs['orderBy'] }
        : { orderBy?: TutorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TutorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorProfile model
   */
  readonly fields: TutorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courses<T extends TutorProfile$coursesArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TutorProfile model
   */
  interface TutorProfileFieldRefs {
    readonly id: FieldRef<"TutorProfile", 'String'>
    readonly userId: FieldRef<"TutorProfile", 'String'>
    readonly headline: FieldRef<"TutorProfile", 'String'>
    readonly bio: FieldRef<"TutorProfile", 'String'>
    readonly hourlyRate: FieldRef<"TutorProfile", 'Int'>
    readonly specialties: FieldRef<"TutorProfile", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * TutorProfile findUnique
   */
  export type TutorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile findUniqueOrThrow
   */
  export type TutorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile findFirst
   */
  export type TutorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorProfiles.
     */
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile findFirstOrThrow
   */
  export type TutorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorProfiles.
     */
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile findMany
   */
  export type TutorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfiles to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile create
   */
  export type TutorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorProfile.
     */
    data: XOR<TutorProfileCreateInput, TutorProfileUncheckedCreateInput>
  }

  /**
   * TutorProfile createMany
   */
  export type TutorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorProfiles.
     */
    data: TutorProfileCreateManyInput | TutorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorProfile createManyAndReturn
   */
  export type TutorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TutorProfiles.
     */
    data: TutorProfileCreateManyInput | TutorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorProfile update
   */
  export type TutorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorProfile.
     */
    data: XOR<TutorProfileUpdateInput, TutorProfileUncheckedUpdateInput>
    /**
     * Choose, which TutorProfile to update.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile updateMany
   */
  export type TutorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorProfiles.
     */
    data: XOR<TutorProfileUpdateManyMutationInput, TutorProfileUncheckedUpdateManyInput>
    /**
     * Filter which TutorProfiles to update
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to update.
     */
    limit?: number
  }

  /**
   * TutorProfile updateManyAndReturn
   */
  export type TutorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * The data used to update TutorProfiles.
     */
    data: XOR<TutorProfileUpdateManyMutationInput, TutorProfileUncheckedUpdateManyInput>
    /**
     * Filter which TutorProfiles to update
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorProfile upsert
   */
  export type TutorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorProfile to update in case it exists.
     */
    where: TutorProfileWhereUniqueInput
    /**
     * In case the TutorProfile found by the `where` argument doesn't exist, create a new TutorProfile with this data.
     */
    create: XOR<TutorProfileCreateInput, TutorProfileUncheckedCreateInput>
    /**
     * In case the TutorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorProfileUpdateInput, TutorProfileUncheckedUpdateInput>
  }

  /**
   * TutorProfile delete
   */
  export type TutorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter which TutorProfile to delete.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile deleteMany
   */
  export type TutorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorProfiles to delete
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to delete.
     */
    limit?: number
  }

  /**
   * TutorProfile.courses
   */
  export type TutorProfile$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * TutorProfile without action
   */
  export type TutorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    tutorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    tutorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    tutorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    tutorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    tutorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    tutorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string
    tutorId: string
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tutorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    likedBy?: boolean | Course$likedByArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tutorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tutorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    tutorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "tutorId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    likedBy?: boolean | Course$likedByArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      tutor: Prisma.$TutorProfilePayload<ExtArgs>
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      likedBy: Prisma.$LikedCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      tutorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends Course$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedBy<T extends Course$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Course$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly tutorId: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.enrollments
   */
  export type Course$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course.likedBy
   */
  export type Course$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    where?: LikedCourseWhereInput
    orderBy?: LikedCourseOrderByWithRelationInput | LikedCourseOrderByWithRelationInput[]
    cursor?: LikedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedCourseScalarFieldEnum | LikedCourseScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentMinAggregateOutputType = {
    userId: string | null
    courseId: string | null
    enrolledAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    userId: string | null
    courseId: string | null
    enrolledAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    userId: number
    courseId: number
    enrolledAt: number
    _all: number
  }


  export type EnrollmentMinAggregateInputType = {
    userId?: true
    courseId?: true
    enrolledAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    userId?: true
    courseId?: true
    enrolledAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    userId?: true
    courseId?: true
    enrolledAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    userId: string
    courseId: string
    enrolledAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    enrolledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    enrolledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    enrolledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    userId?: boolean
    courseId?: boolean
    enrolledAt?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "courseId" | "enrolledAt", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      courseId: string
      enrolledAt: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const enrollmentWithUserIdOnly = await prisma.enrollment.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `userId`
     * const enrollmentWithUserIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `userId`
     * const enrollmentWithUserIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly userId: FieldRef<"Enrollment", 'String'>
    readonly courseId: FieldRef<"Enrollment", 'String'>
    readonly enrolledAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model LikedCourse
   */

  export type AggregateLikedCourse = {
    _count: LikedCourseCountAggregateOutputType | null
    _min: LikedCourseMinAggregateOutputType | null
    _max: LikedCourseMaxAggregateOutputType | null
  }

  export type LikedCourseMinAggregateOutputType = {
    userId: string | null
    courseId: string | null
    likedAt: Date | null
  }

  export type LikedCourseMaxAggregateOutputType = {
    userId: string | null
    courseId: string | null
    likedAt: Date | null
  }

  export type LikedCourseCountAggregateOutputType = {
    userId: number
    courseId: number
    likedAt: number
    _all: number
  }


  export type LikedCourseMinAggregateInputType = {
    userId?: true
    courseId?: true
    likedAt?: true
  }

  export type LikedCourseMaxAggregateInputType = {
    userId?: true
    courseId?: true
    likedAt?: true
  }

  export type LikedCourseCountAggregateInputType = {
    userId?: true
    courseId?: true
    likedAt?: true
    _all?: true
  }

  export type LikedCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedCourse to aggregate.
     */
    where?: LikedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedCourses to fetch.
     */
    orderBy?: LikedCourseOrderByWithRelationInput | LikedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedCourses
    **/
    _count?: true | LikedCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedCourseMaxAggregateInputType
  }

  export type GetLikedCourseAggregateType<T extends LikedCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedCourse[P]>
      : GetScalarType<T[P], AggregateLikedCourse[P]>
  }




  export type LikedCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedCourseWhereInput
    orderBy?: LikedCourseOrderByWithAggregationInput | LikedCourseOrderByWithAggregationInput[]
    by: LikedCourseScalarFieldEnum[] | LikedCourseScalarFieldEnum
    having?: LikedCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedCourseCountAggregateInputType | true
    _min?: LikedCourseMinAggregateInputType
    _max?: LikedCourseMaxAggregateInputType
  }

  export type LikedCourseGroupByOutputType = {
    userId: string
    courseId: string
    likedAt: Date
    _count: LikedCourseCountAggregateOutputType | null
    _min: LikedCourseMinAggregateOutputType | null
    _max: LikedCourseMaxAggregateOutputType | null
  }

  type GetLikedCourseGroupByPayload<T extends LikedCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedCourseGroupByOutputType[P]>
            : GetScalarType<T[P], LikedCourseGroupByOutputType[P]>
        }
      >
    >


  export type LikedCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    likedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedCourse"]>

  export type LikedCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    likedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedCourse"]>

  export type LikedCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    courseId?: boolean
    likedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedCourse"]>

  export type LikedCourseSelectScalar = {
    userId?: boolean
    courseId?: boolean
    likedAt?: boolean
  }

  export type LikedCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "courseId" | "likedAt", ExtArgs["result"]["likedCourse"]>
  export type LikedCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LikedCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LikedCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $LikedCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedCourse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      courseId: string
      likedAt: Date
    }, ExtArgs["result"]["likedCourse"]>
    composites: {}
  }

  type LikedCourseGetPayload<S extends boolean | null | undefined | LikedCourseDefaultArgs> = $Result.GetResult<Prisma.$LikedCoursePayload, S>

  type LikedCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikedCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikedCourseCountAggregateInputType | true
    }

  export interface LikedCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedCourse'], meta: { name: 'LikedCourse' } }
    /**
     * Find zero or one LikedCourse that matches the filter.
     * @param {LikedCourseFindUniqueArgs} args - Arguments to find a LikedCourse
     * @example
     * // Get one LikedCourse
     * const likedCourse = await prisma.likedCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedCourseFindUniqueArgs>(args: SelectSubset<T, LikedCourseFindUniqueArgs<ExtArgs>>): Prisma__LikedCourseClient<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikedCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikedCourseFindUniqueOrThrowArgs} args - Arguments to find a LikedCourse
     * @example
     * // Get one LikedCourse
     * const likedCourse = await prisma.likedCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedCourseClient<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedCourseFindFirstArgs} args - Arguments to find a LikedCourse
     * @example
     * // Get one LikedCourse
     * const likedCourse = await prisma.likedCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedCourseFindFirstArgs>(args?: SelectSubset<T, LikedCourseFindFirstArgs<ExtArgs>>): Prisma__LikedCourseClient<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedCourseFindFirstOrThrowArgs} args - Arguments to find a LikedCourse
     * @example
     * // Get one LikedCourse
     * const likedCourse = await prisma.likedCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedCourseClient<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikedCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedCourses
     * const likedCourses = await prisma.likedCourse.findMany()
     * 
     * // Get first 10 LikedCourses
     * const likedCourses = await prisma.likedCourse.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const likedCourseWithUserIdOnly = await prisma.likedCourse.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends LikedCourseFindManyArgs>(args?: SelectSubset<T, LikedCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikedCourse.
     * @param {LikedCourseCreateArgs} args - Arguments to create a LikedCourse.
     * @example
     * // Create one LikedCourse
     * const LikedCourse = await prisma.likedCourse.create({
     *   data: {
     *     // ... data to create a LikedCourse
     *   }
     * })
     * 
     */
    create<T extends LikedCourseCreateArgs>(args: SelectSubset<T, LikedCourseCreateArgs<ExtArgs>>): Prisma__LikedCourseClient<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikedCourses.
     * @param {LikedCourseCreateManyArgs} args - Arguments to create many LikedCourses.
     * @example
     * // Create many LikedCourses
     * const likedCourse = await prisma.likedCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedCourseCreateManyArgs>(args?: SelectSubset<T, LikedCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikedCourses and returns the data saved in the database.
     * @param {LikedCourseCreateManyAndReturnArgs} args - Arguments to create many LikedCourses.
     * @example
     * // Create many LikedCourses
     * const likedCourse = await prisma.likedCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikedCourses and only return the `userId`
     * const likedCourseWithUserIdOnly = await prisma.likedCourse.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LikedCourse.
     * @param {LikedCourseDeleteArgs} args - Arguments to delete one LikedCourse.
     * @example
     * // Delete one LikedCourse
     * const LikedCourse = await prisma.likedCourse.delete({
     *   where: {
     *     // ... filter to delete one LikedCourse
     *   }
     * })
     * 
     */
    delete<T extends LikedCourseDeleteArgs>(args: SelectSubset<T, LikedCourseDeleteArgs<ExtArgs>>): Prisma__LikedCourseClient<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikedCourse.
     * @param {LikedCourseUpdateArgs} args - Arguments to update one LikedCourse.
     * @example
     * // Update one LikedCourse
     * const likedCourse = await prisma.likedCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedCourseUpdateArgs>(args: SelectSubset<T, LikedCourseUpdateArgs<ExtArgs>>): Prisma__LikedCourseClient<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikedCourses.
     * @param {LikedCourseDeleteManyArgs} args - Arguments to filter LikedCourses to delete.
     * @example
     * // Delete a few LikedCourses
     * const { count } = await prisma.likedCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedCourseDeleteManyArgs>(args?: SelectSubset<T, LikedCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedCourses
     * const likedCourse = await prisma.likedCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedCourseUpdateManyArgs>(args: SelectSubset<T, LikedCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedCourses and returns the data updated in the database.
     * @param {LikedCourseUpdateManyAndReturnArgs} args - Arguments to update many LikedCourses.
     * @example
     * // Update many LikedCourses
     * const likedCourse = await prisma.likedCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikedCourses and only return the `userId`
     * const likedCourseWithUserIdOnly = await prisma.likedCourse.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikedCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, LikedCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LikedCourse.
     * @param {LikedCourseUpsertArgs} args - Arguments to update or create a LikedCourse.
     * @example
     * // Update or create a LikedCourse
     * const likedCourse = await prisma.likedCourse.upsert({
     *   create: {
     *     // ... data to create a LikedCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedCourse we want to update
     *   }
     * })
     */
    upsert<T extends LikedCourseUpsertArgs>(args: SelectSubset<T, LikedCourseUpsertArgs<ExtArgs>>): Prisma__LikedCourseClient<$Result.GetResult<Prisma.$LikedCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LikedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedCourseCountArgs} args - Arguments to filter LikedCourses to count.
     * @example
     * // Count the number of LikedCourses
     * const count = await prisma.likedCourse.count({
     *   where: {
     *     // ... the filter for the LikedCourses we want to count
     *   }
     * })
    **/
    count<T extends LikedCourseCountArgs>(
      args?: Subset<T, LikedCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedCourseAggregateArgs>(args: Subset<T, LikedCourseAggregateArgs>): Prisma.PrismaPromise<GetLikedCourseAggregateType<T>>

    /**
     * Group by LikedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedCourseGroupByArgs['orderBy'] }
        : { orderBy?: LikedCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedCourse model
   */
  readonly fields: LikedCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LikedCourse model
   */
  interface LikedCourseFieldRefs {
    readonly userId: FieldRef<"LikedCourse", 'String'>
    readonly courseId: FieldRef<"LikedCourse", 'String'>
    readonly likedAt: FieldRef<"LikedCourse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedCourse findUnique
   */
  export type LikedCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    /**
     * Filter, which LikedCourse to fetch.
     */
    where: LikedCourseWhereUniqueInput
  }

  /**
   * LikedCourse findUniqueOrThrow
   */
  export type LikedCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    /**
     * Filter, which LikedCourse to fetch.
     */
    where: LikedCourseWhereUniqueInput
  }

  /**
   * LikedCourse findFirst
   */
  export type LikedCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    /**
     * Filter, which LikedCourse to fetch.
     */
    where?: LikedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedCourses to fetch.
     */
    orderBy?: LikedCourseOrderByWithRelationInput | LikedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedCourses.
     */
    cursor?: LikedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedCourses.
     */
    distinct?: LikedCourseScalarFieldEnum | LikedCourseScalarFieldEnum[]
  }

  /**
   * LikedCourse findFirstOrThrow
   */
  export type LikedCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    /**
     * Filter, which LikedCourse to fetch.
     */
    where?: LikedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedCourses to fetch.
     */
    orderBy?: LikedCourseOrderByWithRelationInput | LikedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedCourses.
     */
    cursor?: LikedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedCourses.
     */
    distinct?: LikedCourseScalarFieldEnum | LikedCourseScalarFieldEnum[]
  }

  /**
   * LikedCourse findMany
   */
  export type LikedCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    /**
     * Filter, which LikedCourses to fetch.
     */
    where?: LikedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedCourses to fetch.
     */
    orderBy?: LikedCourseOrderByWithRelationInput | LikedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedCourses.
     */
    cursor?: LikedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedCourses.
     */
    skip?: number
    distinct?: LikedCourseScalarFieldEnum | LikedCourseScalarFieldEnum[]
  }

  /**
   * LikedCourse create
   */
  export type LikedCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedCourse.
     */
    data: XOR<LikedCourseCreateInput, LikedCourseUncheckedCreateInput>
  }

  /**
   * LikedCourse createMany
   */
  export type LikedCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedCourses.
     */
    data: LikedCourseCreateManyInput | LikedCourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikedCourse createManyAndReturn
   */
  export type LikedCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * The data used to create many LikedCourses.
     */
    data: LikedCourseCreateManyInput | LikedCourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedCourse update
   */
  export type LikedCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedCourse.
     */
    data: XOR<LikedCourseUpdateInput, LikedCourseUncheckedUpdateInput>
    /**
     * Choose, which LikedCourse to update.
     */
    where: LikedCourseWhereUniqueInput
  }

  /**
   * LikedCourse updateMany
   */
  export type LikedCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedCourses.
     */
    data: XOR<LikedCourseUpdateManyMutationInput, LikedCourseUncheckedUpdateManyInput>
    /**
     * Filter which LikedCourses to update
     */
    where?: LikedCourseWhereInput
    /**
     * Limit how many LikedCourses to update.
     */
    limit?: number
  }

  /**
   * LikedCourse updateManyAndReturn
   */
  export type LikedCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * The data used to update LikedCourses.
     */
    data: XOR<LikedCourseUpdateManyMutationInput, LikedCourseUncheckedUpdateManyInput>
    /**
     * Filter which LikedCourses to update
     */
    where?: LikedCourseWhereInput
    /**
     * Limit how many LikedCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedCourse upsert
   */
  export type LikedCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedCourse to update in case it exists.
     */
    where: LikedCourseWhereUniqueInput
    /**
     * In case the LikedCourse found by the `where` argument doesn't exist, create a new LikedCourse with this data.
     */
    create: XOR<LikedCourseCreateInput, LikedCourseUncheckedCreateInput>
    /**
     * In case the LikedCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedCourseUpdateInput, LikedCourseUncheckedUpdateInput>
  }

  /**
   * LikedCourse delete
   */
  export type LikedCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
    /**
     * Filter which LikedCourse to delete.
     */
    where: LikedCourseWhereUniqueInput
  }

  /**
   * LikedCourse deleteMany
   */
  export type LikedCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedCourses to delete
     */
    where?: LikedCourseWhereInput
    /**
     * Limit how many LikedCourses to delete.
     */
    limit?: number
  }

  /**
   * LikedCourse without action
   */
  export type LikedCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedCourse
     */
    select?: LikedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedCourse
     */
    omit?: LikedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedCourseInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    sessionDate: Date | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    aspirantId: string | null
    tutorId: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    sessionDate: Date | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    aspirantId: string | null
    tutorId: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    sessionDate: number
    status: number
    createdAt: number
    updatedAt: number
    aspirantId: number
    tutorId: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    sessionDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    aspirantId?: true
    tutorId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    sessionDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    aspirantId?: true
    tutorId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    sessionDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    aspirantId?: true
    tutorId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    sessionDate: Date
    status: $Enums.BookingStatus
    createdAt: Date
    updatedAt: Date
    aspirantId: string
    tutorId: string
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aspirantId?: boolean
    tutorId?: boolean
    aspirant?: boolean | UserDefaultArgs<ExtArgs>
    tutor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aspirantId?: boolean
    tutorId?: boolean
    aspirant?: boolean | UserDefaultArgs<ExtArgs>
    tutor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aspirantId?: boolean
    tutorId?: boolean
    aspirant?: boolean | UserDefaultArgs<ExtArgs>
    tutor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    sessionDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aspirantId?: boolean
    tutorId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionDate" | "status" | "createdAt" | "updatedAt" | "aspirantId" | "tutorId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aspirant?: boolean | UserDefaultArgs<ExtArgs>
    tutor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aspirant?: boolean | UserDefaultArgs<ExtArgs>
    tutor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aspirant?: boolean | UserDefaultArgs<ExtArgs>
    tutor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      aspirant: Prisma.$UserPayload<ExtArgs>
      tutor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionDate: Date
      status: $Enums.BookingStatus
      createdAt: Date
      updatedAt: Date
      aspirantId: string
      tutorId: string
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aspirant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly sessionDate: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
    readonly aspirantId: FieldRef<"Booking", 'String'>
    readonly tutorId: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordExpires: 'resetPasswordExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AspirantProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    interests: 'interests',
    skills: 'skills',
    learningGoals: 'learningGoals'
  };

  export type AspirantProfileScalarFieldEnum = (typeof AspirantProfileScalarFieldEnum)[keyof typeof AspirantProfileScalarFieldEnum]


  export const TutorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    headline: 'headline',
    bio: 'bio',
    hourlyRate: 'hourlyRate',
    specialties: 'specialties'
  };

  export type TutorProfileScalarFieldEnum = (typeof TutorProfileScalarFieldEnum)[keyof typeof TutorProfileScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    tutorId: 'tutorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    userId: 'userId',
    courseId: 'courseId',
    enrolledAt: 'enrolledAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const LikedCourseScalarFieldEnum: {
    userId: 'userId',
    courseId: 'courseId',
    likedAt: 'likedAt'
  };

  export type LikedCourseScalarFieldEnum = (typeof LikedCourseScalarFieldEnum)[keyof typeof LikedCourseScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    sessionDate: 'sessionDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    aspirantId: 'aspirantId',
    tutorId: 'tutorId'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    aspirantProfile?: XOR<AspirantProfileNullableScalarRelationFilter, AspirantProfileWhereInput> | null
    tutorProfile?: XOR<TutorProfileNullableScalarRelationFilter, TutorProfileWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
    likedCourses?: LikedCourseListRelationFilter
    bookingsAsAspirant?: BookingListRelationFilter
    bookingsAsTutor?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    aspirantProfile?: AspirantProfileOrderByWithRelationInput
    tutorProfile?: TutorProfileOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    likedCourses?: LikedCourseOrderByRelationAggregateInput
    bookingsAsAspirant?: BookingOrderByRelationAggregateInput
    bookingsAsTutor?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    aspirantProfile?: XOR<AspirantProfileNullableScalarRelationFilter, AspirantProfileWhereInput> | null
    tutorProfile?: XOR<TutorProfileNullableScalarRelationFilter, TutorProfileWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
    likedCourses?: LikedCourseListRelationFilter
    bookingsAsAspirant?: BookingListRelationFilter
    bookingsAsTutor?: BookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AspirantProfileWhereInput = {
    AND?: AspirantProfileWhereInput | AspirantProfileWhereInput[]
    OR?: AspirantProfileWhereInput[]
    NOT?: AspirantProfileWhereInput | AspirantProfileWhereInput[]
    id?: StringFilter<"AspirantProfile"> | string
    userId?: StringFilter<"AspirantProfile"> | string
    interests?: StringNullableListFilter<"AspirantProfile">
    skills?: StringNullableListFilter<"AspirantProfile">
    learningGoals?: StringNullableListFilter<"AspirantProfile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AspirantProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    interests?: SortOrder
    skills?: SortOrder
    learningGoals?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AspirantProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AspirantProfileWhereInput | AspirantProfileWhereInput[]
    OR?: AspirantProfileWhereInput[]
    NOT?: AspirantProfileWhereInput | AspirantProfileWhereInput[]
    interests?: StringNullableListFilter<"AspirantProfile">
    skills?: StringNullableListFilter<"AspirantProfile">
    learningGoals?: StringNullableListFilter<"AspirantProfile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AspirantProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    interests?: SortOrder
    skills?: SortOrder
    learningGoals?: SortOrder
    _count?: AspirantProfileCountOrderByAggregateInput
    _max?: AspirantProfileMaxOrderByAggregateInput
    _min?: AspirantProfileMinOrderByAggregateInput
  }

  export type AspirantProfileScalarWhereWithAggregatesInput = {
    AND?: AspirantProfileScalarWhereWithAggregatesInput | AspirantProfileScalarWhereWithAggregatesInput[]
    OR?: AspirantProfileScalarWhereWithAggregatesInput[]
    NOT?: AspirantProfileScalarWhereWithAggregatesInput | AspirantProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AspirantProfile"> | string
    userId?: StringWithAggregatesFilter<"AspirantProfile"> | string
    interests?: StringNullableListFilter<"AspirantProfile">
    skills?: StringNullableListFilter<"AspirantProfile">
    learningGoals?: StringNullableListFilter<"AspirantProfile">
  }

  export type TutorProfileWhereInput = {
    AND?: TutorProfileWhereInput | TutorProfileWhereInput[]
    OR?: TutorProfileWhereInput[]
    NOT?: TutorProfileWhereInput | TutorProfileWhereInput[]
    id?: StringFilter<"TutorProfile"> | string
    userId?: StringFilter<"TutorProfile"> | string
    headline?: StringFilter<"TutorProfile"> | string
    bio?: StringFilter<"TutorProfile"> | string
    hourlyRate?: IntFilter<"TutorProfile"> | number
    specialties?: StringNullableListFilter<"TutorProfile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courses?: CourseListRelationFilter
  }

  export type TutorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    hourlyRate?: SortOrder
    specialties?: SortOrder
    user?: UserOrderByWithRelationInput
    courses?: CourseOrderByRelationAggregateInput
  }

  export type TutorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TutorProfileWhereInput | TutorProfileWhereInput[]
    OR?: TutorProfileWhereInput[]
    NOT?: TutorProfileWhereInput | TutorProfileWhereInput[]
    headline?: StringFilter<"TutorProfile"> | string
    bio?: StringFilter<"TutorProfile"> | string
    hourlyRate?: IntFilter<"TutorProfile"> | number
    specialties?: StringNullableListFilter<"TutorProfile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courses?: CourseListRelationFilter
  }, "id" | "userId">

  export type TutorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    hourlyRate?: SortOrder
    specialties?: SortOrder
    _count?: TutorProfileCountOrderByAggregateInput
    _avg?: TutorProfileAvgOrderByAggregateInput
    _max?: TutorProfileMaxOrderByAggregateInput
    _min?: TutorProfileMinOrderByAggregateInput
    _sum?: TutorProfileSumOrderByAggregateInput
  }

  export type TutorProfileScalarWhereWithAggregatesInput = {
    AND?: TutorProfileScalarWhereWithAggregatesInput | TutorProfileScalarWhereWithAggregatesInput[]
    OR?: TutorProfileScalarWhereWithAggregatesInput[]
    NOT?: TutorProfileScalarWhereWithAggregatesInput | TutorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TutorProfile"> | string
    userId?: StringWithAggregatesFilter<"TutorProfile"> | string
    headline?: StringWithAggregatesFilter<"TutorProfile"> | string
    bio?: StringWithAggregatesFilter<"TutorProfile"> | string
    hourlyRate?: IntWithAggregatesFilter<"TutorProfile"> | number
    specialties?: StringNullableListFilter<"TutorProfile">
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    tutorId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    enrollments?: EnrollmentListRelationFilter
    likedBy?: LikedCourseListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tutorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tutor?: TutorProfileOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    likedBy?: LikedCourseOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    tutorId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    enrollments?: EnrollmentListRelationFilter
    likedBy?: LikedCourseListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tutorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    tutorId?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    userId?: SortOrder
    courseId?: SortOrder
    enrolledAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    userId_courseId?: EnrollmentUserIdCourseIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "userId_courseId">

  export type EnrollmentOrderByWithAggregationInput = {
    userId?: SortOrder
    courseId?: SortOrder
    enrolledAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Enrollment"> | string
    courseId?: StringWithAggregatesFilter<"Enrollment"> | string
    enrolledAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
  }

  export type LikedCourseWhereInput = {
    AND?: LikedCourseWhereInput | LikedCourseWhereInput[]
    OR?: LikedCourseWhereInput[]
    NOT?: LikedCourseWhereInput | LikedCourseWhereInput[]
    userId?: StringFilter<"LikedCourse"> | string
    courseId?: StringFilter<"LikedCourse"> | string
    likedAt?: DateTimeFilter<"LikedCourse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type LikedCourseOrderByWithRelationInput = {
    userId?: SortOrder
    courseId?: SortOrder
    likedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type LikedCourseWhereUniqueInput = Prisma.AtLeast<{
    userId_courseId?: LikedCourseUserIdCourseIdCompoundUniqueInput
    AND?: LikedCourseWhereInput | LikedCourseWhereInput[]
    OR?: LikedCourseWhereInput[]
    NOT?: LikedCourseWhereInput | LikedCourseWhereInput[]
    userId?: StringFilter<"LikedCourse"> | string
    courseId?: StringFilter<"LikedCourse"> | string
    likedAt?: DateTimeFilter<"LikedCourse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "userId_courseId">

  export type LikedCourseOrderByWithAggregationInput = {
    userId?: SortOrder
    courseId?: SortOrder
    likedAt?: SortOrder
    _count?: LikedCourseCountOrderByAggregateInput
    _max?: LikedCourseMaxOrderByAggregateInput
    _min?: LikedCourseMinOrderByAggregateInput
  }

  export type LikedCourseScalarWhereWithAggregatesInput = {
    AND?: LikedCourseScalarWhereWithAggregatesInput | LikedCourseScalarWhereWithAggregatesInput[]
    OR?: LikedCourseScalarWhereWithAggregatesInput[]
    NOT?: LikedCourseScalarWhereWithAggregatesInput | LikedCourseScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"LikedCourse"> | string
    courseId?: StringWithAggregatesFilter<"LikedCourse"> | string
    likedAt?: DateTimeWithAggregatesFilter<"LikedCourse"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    sessionDate?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    aspirantId?: StringFilter<"Booking"> | string
    tutorId?: StringFilter<"Booking"> | string
    aspirant?: XOR<UserScalarRelationFilter, UserWhereInput>
    tutor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    sessionDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aspirantId?: SortOrder
    tutorId?: SortOrder
    aspirant?: UserOrderByWithRelationInput
    tutor?: UserOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    sessionDate?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    aspirantId?: StringFilter<"Booking"> | string
    tutorId?: StringFilter<"Booking"> | string
    aspirant?: XOR<UserScalarRelationFilter, UserWhereInput>
    tutor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    sessionDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aspirantId?: SortOrder
    tutorId?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    sessionDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    aspirantId?: StringWithAggregatesFilter<"Booking"> | string
    tutorId?: StringWithAggregatesFilter<"Booking"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileCreateNestedOneWithoutUserInput
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    likedCourses?: LikedCourseCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingCreateNestedManyWithoutAspirantInput
    bookingsAsTutor?: BookingCreateNestedManyWithoutTutorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileUncheckedCreateNestedOneWithoutUserInput
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    likedCourses?: LikedCourseUncheckedCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingUncheckedCreateNestedManyWithoutAspirantInput
    bookingsAsTutor?: BookingUncheckedCreateNestedManyWithoutTutorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUpdateOneWithoutUserNestedInput
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    likedCourses?: LikedCourseUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUpdateManyWithoutAspirantNestedInput
    bookingsAsTutor?: BookingUpdateManyWithoutTutorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUncheckedUpdateOneWithoutUserNestedInput
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    likedCourses?: LikedCourseUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUncheckedUpdateManyWithoutAspirantNestedInput
    bookingsAsTutor?: BookingUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AspirantProfileCreateInput = {
    id?: string
    interests?: AspirantProfileCreateinterestsInput | string[]
    skills?: AspirantProfileCreateskillsInput | string[]
    learningGoals?: AspirantProfileCreatelearningGoalsInput | string[]
    user: UserCreateNestedOneWithoutAspirantProfileInput
  }

  export type AspirantProfileUncheckedCreateInput = {
    id?: string
    userId: string
    interests?: AspirantProfileCreateinterestsInput | string[]
    skills?: AspirantProfileCreateskillsInput | string[]
    learningGoals?: AspirantProfileCreatelearningGoalsInput | string[]
  }

  export type AspirantProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: AspirantProfileUpdateinterestsInput | string[]
    skills?: AspirantProfileUpdateskillsInput | string[]
    learningGoals?: AspirantProfileUpdatelearningGoalsInput | string[]
    user?: UserUpdateOneRequiredWithoutAspirantProfileNestedInput
  }

  export type AspirantProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interests?: AspirantProfileUpdateinterestsInput | string[]
    skills?: AspirantProfileUpdateskillsInput | string[]
    learningGoals?: AspirantProfileUpdatelearningGoalsInput | string[]
  }

  export type AspirantProfileCreateManyInput = {
    id?: string
    userId: string
    interests?: AspirantProfileCreateinterestsInput | string[]
    skills?: AspirantProfileCreateskillsInput | string[]
    learningGoals?: AspirantProfileCreatelearningGoalsInput | string[]
  }

  export type AspirantProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: AspirantProfileUpdateinterestsInput | string[]
    skills?: AspirantProfileUpdateskillsInput | string[]
    learningGoals?: AspirantProfileUpdatelearningGoalsInput | string[]
  }

  export type AspirantProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interests?: AspirantProfileUpdateinterestsInput | string[]
    skills?: AspirantProfileUpdateskillsInput | string[]
    learningGoals?: AspirantProfileUpdatelearningGoalsInput | string[]
  }

  export type TutorProfileCreateInput = {
    id?: string
    headline: string
    bio: string
    hourlyRate: number
    specialties?: TutorProfileCreatespecialtiesInput | string[]
    user: UserCreateNestedOneWithoutTutorProfileInput
    courses?: CourseCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    headline: string
    bio: string
    hourlyRate: number
    specialties?: TutorProfileCreatespecialtiesInput | string[]
    courses?: CourseUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    hourlyRate?: IntFieldUpdateOperationsInput | number
    specialties?: TutorProfileUpdatespecialtiesInput | string[]
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    courses?: CourseUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    hourlyRate?: IntFieldUpdateOperationsInput | number
    specialties?: TutorProfileUpdatespecialtiesInput | string[]
    courses?: CourseUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileCreateManyInput = {
    id?: string
    userId: string
    headline: string
    bio: string
    hourlyRate: number
    specialties?: TutorProfileCreatespecialtiesInput | string[]
  }

  export type TutorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    hourlyRate?: IntFieldUpdateOperationsInput | number
    specialties?: TutorProfileUpdatespecialtiesInput | string[]
  }

  export type TutorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    hourlyRate?: IntFieldUpdateOperationsInput | number
    specialties?: TutorProfileUpdatespecialtiesInput | string[]
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor: TutorProfileCreateNestedOneWithoutCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    likedBy?: LikedCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    tutorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    likedBy?: LikedCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: TutorProfileUpdateOneRequiredWithoutCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    likedBy?: LikedCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    likedBy?: LikedCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description: string
    tutorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    enrolledAt?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    userId: string
    courseId: string
    enrolledAt?: Date | string
  }

  export type EnrollmentUpdateInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    userId: string
    courseId: string
    enrolledAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedCourseCreateInput = {
    likedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedCoursesInput
    course: CourseCreateNestedOneWithoutLikedByInput
  }

  export type LikedCourseUncheckedCreateInput = {
    userId: string
    courseId: string
    likedAt?: Date | string
  }

  export type LikedCourseUpdateInput = {
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedCoursesNestedInput
    course?: CourseUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type LikedCourseUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedCourseCreateManyInput = {
    userId: string
    courseId: string
    likedAt?: Date | string
  }

  export type LikedCourseUpdateManyMutationInput = {
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedCourseUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    sessionDate: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aspirant: UserCreateNestedOneWithoutBookingsAsAspirantInput
    tutor: UserCreateNestedOneWithoutBookingsAsTutorInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    sessionDate: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aspirantId: string
    tutorId: string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aspirant?: UserUpdateOneRequiredWithoutBookingsAsAspirantNestedInput
    tutor?: UserUpdateOneRequiredWithoutBookingsAsTutorNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aspirantId?: StringFieldUpdateOperationsInput | string
    tutorId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyInput = {
    id?: string
    sessionDate: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aspirantId: string
    tutorId: string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aspirantId?: StringFieldUpdateOperationsInput | string
    tutorId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AspirantProfileNullableScalarRelationFilter = {
    is?: AspirantProfileWhereInput | null
    isNot?: AspirantProfileWhereInput | null
  }

  export type TutorProfileNullableScalarRelationFilter = {
    is?: TutorProfileWhereInput | null
    isNot?: TutorProfileWhereInput | null
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type LikedCourseListRelationFilter = {
    every?: LikedCourseWhereInput
    some?: LikedCourseWhereInput
    none?: LikedCourseWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AspirantProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    interests?: SortOrder
    skills?: SortOrder
    learningGoals?: SortOrder
  }

  export type AspirantProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AspirantProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    hourlyRate?: SortOrder
    specialties?: SortOrder
  }

  export type TutorProfileAvgOrderByAggregateInput = {
    hourlyRate?: SortOrder
  }

  export type TutorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    hourlyRate?: SortOrder
  }

  export type TutorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    hourlyRate?: SortOrder
  }

  export type TutorProfileSumOrderByAggregateInput = {
    hourlyRate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TutorProfileScalarRelationFilter = {
    is?: TutorProfileWhereInput
    isNot?: TutorProfileWhereInput
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tutorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tutorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tutorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type EnrollmentUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type EnrollmentCountOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    enrolledAt?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    enrolledAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    enrolledAt?: SortOrder
  }

  export type LikedCourseUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type LikedCourseCountOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedCourseMaxOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedCourseMinOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    likedAt?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    sessionDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aspirantId?: SortOrder
    tutorId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aspirantId?: SortOrder
    tutorId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    sessionDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aspirantId?: SortOrder
    tutorId?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type AspirantProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<AspirantProfileCreateWithoutUserInput, AspirantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AspirantProfileCreateOrConnectWithoutUserInput
    connect?: AspirantProfileWhereUniqueInput
  }

  export type TutorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type LikedCourseCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedCourseCreateWithoutUserInput, LikedCourseUncheckedCreateWithoutUserInput> | LikedCourseCreateWithoutUserInput[] | LikedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedCourseCreateOrConnectWithoutUserInput | LikedCourseCreateOrConnectWithoutUserInput[]
    createMany?: LikedCourseCreateManyUserInputEnvelope
    connect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutAspirantInput = {
    create?: XOR<BookingCreateWithoutAspirantInput, BookingUncheckedCreateWithoutAspirantInput> | BookingCreateWithoutAspirantInput[] | BookingUncheckedCreateWithoutAspirantInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAspirantInput | BookingCreateOrConnectWithoutAspirantInput[]
    createMany?: BookingCreateManyAspirantInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutTutorInput = {
    create?: XOR<BookingCreateWithoutTutorInput, BookingUncheckedCreateWithoutTutorInput> | BookingCreateWithoutTutorInput[] | BookingUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTutorInput | BookingCreateOrConnectWithoutTutorInput[]
    createMany?: BookingCreateManyTutorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type AspirantProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AspirantProfileCreateWithoutUserInput, AspirantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AspirantProfileCreateOrConnectWithoutUserInput
    connect?: AspirantProfileWhereUniqueInput
  }

  export type TutorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type LikedCourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedCourseCreateWithoutUserInput, LikedCourseUncheckedCreateWithoutUserInput> | LikedCourseCreateWithoutUserInput[] | LikedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedCourseCreateOrConnectWithoutUserInput | LikedCourseCreateOrConnectWithoutUserInput[]
    createMany?: LikedCourseCreateManyUserInputEnvelope
    connect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutAspirantInput = {
    create?: XOR<BookingCreateWithoutAspirantInput, BookingUncheckedCreateWithoutAspirantInput> | BookingCreateWithoutAspirantInput[] | BookingUncheckedCreateWithoutAspirantInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAspirantInput | BookingCreateOrConnectWithoutAspirantInput[]
    createMany?: BookingCreateManyAspirantInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<BookingCreateWithoutTutorInput, BookingUncheckedCreateWithoutTutorInput> | BookingCreateWithoutTutorInput[] | BookingUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTutorInput | BookingCreateOrConnectWithoutTutorInput[]
    createMany?: BookingCreateManyTutorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AspirantProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<AspirantProfileCreateWithoutUserInput, AspirantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AspirantProfileCreateOrConnectWithoutUserInput
    upsert?: AspirantProfileUpsertWithoutUserInput
    disconnect?: AspirantProfileWhereInput | boolean
    delete?: AspirantProfileWhereInput | boolean
    connect?: AspirantProfileWhereUniqueInput
    update?: XOR<XOR<AspirantProfileUpdateToOneWithWhereWithoutUserInput, AspirantProfileUpdateWithoutUserInput>, AspirantProfileUncheckedUpdateWithoutUserInput>
  }

  export type TutorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    upsert?: TutorProfileUpsertWithoutUserInput
    disconnect?: TutorProfileWhereInput | boolean
    delete?: TutorProfileWhereInput | boolean
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutUserInput, TutorProfileUpdateWithoutUserInput>, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type LikedCourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedCourseCreateWithoutUserInput, LikedCourseUncheckedCreateWithoutUserInput> | LikedCourseCreateWithoutUserInput[] | LikedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedCourseCreateOrConnectWithoutUserInput | LikedCourseCreateOrConnectWithoutUserInput[]
    upsert?: LikedCourseUpsertWithWhereUniqueWithoutUserInput | LikedCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedCourseCreateManyUserInputEnvelope
    set?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    disconnect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    delete?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    connect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    update?: LikedCourseUpdateWithWhereUniqueWithoutUserInput | LikedCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedCourseUpdateManyWithWhereWithoutUserInput | LikedCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedCourseScalarWhereInput | LikedCourseScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutAspirantNestedInput = {
    create?: XOR<BookingCreateWithoutAspirantInput, BookingUncheckedCreateWithoutAspirantInput> | BookingCreateWithoutAspirantInput[] | BookingUncheckedCreateWithoutAspirantInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAspirantInput | BookingCreateOrConnectWithoutAspirantInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutAspirantInput | BookingUpsertWithWhereUniqueWithoutAspirantInput[]
    createMany?: BookingCreateManyAspirantInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutAspirantInput | BookingUpdateWithWhereUniqueWithoutAspirantInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutAspirantInput | BookingUpdateManyWithWhereWithoutAspirantInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutTutorNestedInput = {
    create?: XOR<BookingCreateWithoutTutorInput, BookingUncheckedCreateWithoutTutorInput> | BookingCreateWithoutTutorInput[] | BookingUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTutorInput | BookingCreateOrConnectWithoutTutorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTutorInput | BookingUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: BookingCreateManyTutorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTutorInput | BookingUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTutorInput | BookingUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AspirantProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AspirantProfileCreateWithoutUserInput, AspirantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AspirantProfileCreateOrConnectWithoutUserInput
    upsert?: AspirantProfileUpsertWithoutUserInput
    disconnect?: AspirantProfileWhereInput | boolean
    delete?: AspirantProfileWhereInput | boolean
    connect?: AspirantProfileWhereUniqueInput
    update?: XOR<XOR<AspirantProfileUpdateToOneWithWhereWithoutUserInput, AspirantProfileUpdateWithoutUserInput>, AspirantProfileUncheckedUpdateWithoutUserInput>
  }

  export type TutorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    upsert?: TutorProfileUpsertWithoutUserInput
    disconnect?: TutorProfileWhereInput | boolean
    delete?: TutorProfileWhereInput | boolean
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutUserInput, TutorProfileUpdateWithoutUserInput>, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type LikedCourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedCourseCreateWithoutUserInput, LikedCourseUncheckedCreateWithoutUserInput> | LikedCourseCreateWithoutUserInput[] | LikedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedCourseCreateOrConnectWithoutUserInput | LikedCourseCreateOrConnectWithoutUserInput[]
    upsert?: LikedCourseUpsertWithWhereUniqueWithoutUserInput | LikedCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedCourseCreateManyUserInputEnvelope
    set?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    disconnect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    delete?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    connect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    update?: LikedCourseUpdateWithWhereUniqueWithoutUserInput | LikedCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedCourseUpdateManyWithWhereWithoutUserInput | LikedCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedCourseScalarWhereInput | LikedCourseScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutAspirantNestedInput = {
    create?: XOR<BookingCreateWithoutAspirantInput, BookingUncheckedCreateWithoutAspirantInput> | BookingCreateWithoutAspirantInput[] | BookingUncheckedCreateWithoutAspirantInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAspirantInput | BookingCreateOrConnectWithoutAspirantInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutAspirantInput | BookingUpsertWithWhereUniqueWithoutAspirantInput[]
    createMany?: BookingCreateManyAspirantInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutAspirantInput | BookingUpdateWithWhereUniqueWithoutAspirantInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutAspirantInput | BookingUpdateManyWithWhereWithoutAspirantInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<BookingCreateWithoutTutorInput, BookingUncheckedCreateWithoutTutorInput> | BookingCreateWithoutTutorInput[] | BookingUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTutorInput | BookingCreateOrConnectWithoutTutorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTutorInput | BookingUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: BookingCreateManyTutorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTutorInput | BookingUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTutorInput | BookingUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AspirantProfileCreateinterestsInput = {
    set: string[]
  }

  export type AspirantProfileCreateskillsInput = {
    set: string[]
  }

  export type AspirantProfileCreatelearningGoalsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutAspirantProfileInput = {
    create?: XOR<UserCreateWithoutAspirantProfileInput, UserUncheckedCreateWithoutAspirantProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAspirantProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AspirantProfileUpdateinterestsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AspirantProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AspirantProfileUpdatelearningGoalsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutAspirantProfileNestedInput = {
    create?: XOR<UserCreateWithoutAspirantProfileInput, UserUncheckedCreateWithoutAspirantProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAspirantProfileInput
    upsert?: UserUpsertWithoutAspirantProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAspirantProfileInput, UserUpdateWithoutAspirantProfileInput>, UserUncheckedUpdateWithoutAspirantProfileInput>
  }

  export type TutorProfileCreatespecialtiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutTutorProfileInput = {
    create?: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedManyWithoutTutorInput = {
    create?: XOR<CourseCreateWithoutTutorInput, CourseUncheckedCreateWithoutTutorInput> | CourseCreateWithoutTutorInput[] | CourseUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTutorInput | CourseCreateOrConnectWithoutTutorInput[]
    createMany?: CourseCreateManyTutorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<CourseCreateWithoutTutorInput, CourseUncheckedCreateWithoutTutorInput> | CourseCreateWithoutTutorInput[] | CourseUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTutorInput | CourseCreateOrConnectWithoutTutorInput[]
    createMany?: CourseCreateManyTutorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TutorProfileUpdatespecialtiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutTutorProfileNestedInput = {
    create?: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorProfileInput
    upsert?: UserUpsertWithoutTutorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTutorProfileInput, UserUpdateWithoutTutorProfileInput>, UserUncheckedUpdateWithoutTutorProfileInput>
  }

  export type CourseUpdateManyWithoutTutorNestedInput = {
    create?: XOR<CourseCreateWithoutTutorInput, CourseUncheckedCreateWithoutTutorInput> | CourseCreateWithoutTutorInput[] | CourseUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTutorInput | CourseCreateOrConnectWithoutTutorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTutorInput | CourseUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: CourseCreateManyTutorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTutorInput | CourseUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTutorInput | CourseUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<CourseCreateWithoutTutorInput, CourseUncheckedCreateWithoutTutorInput> | CourseCreateWithoutTutorInput[] | CourseUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTutorInput | CourseCreateOrConnectWithoutTutorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTutorInput | CourseUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: CourseCreateManyTutorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTutorInput | CourseUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTutorInput | CourseUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type TutorProfileCreateNestedOneWithoutCoursesInput = {
    create?: XOR<TutorProfileCreateWithoutCoursesInput, TutorProfileUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutCoursesInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type LikedCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<LikedCourseCreateWithoutCourseInput, LikedCourseUncheckedCreateWithoutCourseInput> | LikedCourseCreateWithoutCourseInput[] | LikedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LikedCourseCreateOrConnectWithoutCourseInput | LikedCourseCreateOrConnectWithoutCourseInput[]
    createMany?: LikedCourseCreateManyCourseInputEnvelope
    connect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type LikedCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LikedCourseCreateWithoutCourseInput, LikedCourseUncheckedCreateWithoutCourseInput> | LikedCourseCreateWithoutCourseInput[] | LikedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LikedCourseCreateOrConnectWithoutCourseInput | LikedCourseCreateOrConnectWithoutCourseInput[]
    createMany?: LikedCourseCreateManyCourseInputEnvelope
    connect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
  }

  export type TutorProfileUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<TutorProfileCreateWithoutCoursesInput, TutorProfileUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutCoursesInput
    upsert?: TutorProfileUpsertWithoutCoursesInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutCoursesInput, TutorProfileUpdateWithoutCoursesInput>, TutorProfileUncheckedUpdateWithoutCoursesInput>
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type LikedCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LikedCourseCreateWithoutCourseInput, LikedCourseUncheckedCreateWithoutCourseInput> | LikedCourseCreateWithoutCourseInput[] | LikedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LikedCourseCreateOrConnectWithoutCourseInput | LikedCourseCreateOrConnectWithoutCourseInput[]
    upsert?: LikedCourseUpsertWithWhereUniqueWithoutCourseInput | LikedCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LikedCourseCreateManyCourseInputEnvelope
    set?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    disconnect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    delete?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    connect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    update?: LikedCourseUpdateWithWhereUniqueWithoutCourseInput | LikedCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LikedCourseUpdateManyWithWhereWithoutCourseInput | LikedCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LikedCourseScalarWhereInput | LikedCourseScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type LikedCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LikedCourseCreateWithoutCourseInput, LikedCourseUncheckedCreateWithoutCourseInput> | LikedCourseCreateWithoutCourseInput[] | LikedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LikedCourseCreateOrConnectWithoutCourseInput | LikedCourseCreateOrConnectWithoutCourseInput[]
    upsert?: LikedCourseUpsertWithWhereUniqueWithoutCourseInput | LikedCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LikedCourseCreateManyCourseInputEnvelope
    set?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    disconnect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    delete?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    connect?: LikedCourseWhereUniqueInput | LikedCourseWhereUniqueInput[]
    update?: LikedCourseUpdateWithWhereUniqueWithoutCourseInput | LikedCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LikedCourseUpdateManyWithWhereWithoutCourseInput | LikedCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LikedCourseScalarWhereInput | LikedCourseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseUpsertWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentsInput, CourseUpdateWithoutEnrollmentsInput>, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserCreateNestedOneWithoutLikedCoursesInput = {
    create?: XOR<UserCreateWithoutLikedCoursesInput, UserUncheckedCreateWithoutLikedCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutLikedByInput = {
    create?: XOR<CourseCreateWithoutLikedByInput, CourseUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLikedByInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedCoursesNestedInput = {
    create?: XOR<UserCreateWithoutLikedCoursesInput, UserUncheckedCreateWithoutLikedCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedCoursesInput
    upsert?: UserUpsertWithoutLikedCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedCoursesInput, UserUpdateWithoutLikedCoursesInput>, UserUncheckedUpdateWithoutLikedCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutLikedByNestedInput = {
    create?: XOR<CourseCreateWithoutLikedByInput, CourseUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLikedByInput
    upsert?: CourseUpsertWithoutLikedByInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutLikedByInput, CourseUpdateWithoutLikedByInput>, CourseUncheckedUpdateWithoutLikedByInput>
  }

  export type UserCreateNestedOneWithoutBookingsAsAspirantInput = {
    create?: XOR<UserCreateWithoutBookingsAsAspirantInput, UserUncheckedCreateWithoutBookingsAsAspirantInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsAspirantInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsAsTutorInput = {
    create?: XOR<UserCreateWithoutBookingsAsTutorInput, UserUncheckedCreateWithoutBookingsAsTutorInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsTutorInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsAsAspirantNestedInput = {
    create?: XOR<UserCreateWithoutBookingsAsAspirantInput, UserUncheckedCreateWithoutBookingsAsAspirantInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsAspirantInput
    upsert?: UserUpsertWithoutBookingsAsAspirantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsAsAspirantInput, UserUpdateWithoutBookingsAsAspirantInput>, UserUncheckedUpdateWithoutBookingsAsAspirantInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsAsTutorNestedInput = {
    create?: XOR<UserCreateWithoutBookingsAsTutorInput, UserUncheckedCreateWithoutBookingsAsTutorInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsTutorInput
    upsert?: UserUpsertWithoutBookingsAsTutorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsAsTutorInput, UserUpdateWithoutBookingsAsTutorInput>, UserUncheckedUpdateWithoutBookingsAsTutorInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type AspirantProfileCreateWithoutUserInput = {
    id?: string
    interests?: AspirantProfileCreateinterestsInput | string[]
    skills?: AspirantProfileCreateskillsInput | string[]
    learningGoals?: AspirantProfileCreatelearningGoalsInput | string[]
  }

  export type AspirantProfileUncheckedCreateWithoutUserInput = {
    id?: string
    interests?: AspirantProfileCreateinterestsInput | string[]
    skills?: AspirantProfileCreateskillsInput | string[]
    learningGoals?: AspirantProfileCreatelearningGoalsInput | string[]
  }

  export type AspirantProfileCreateOrConnectWithoutUserInput = {
    where: AspirantProfileWhereUniqueInput
    create: XOR<AspirantProfileCreateWithoutUserInput, AspirantProfileUncheckedCreateWithoutUserInput>
  }

  export type TutorProfileCreateWithoutUserInput = {
    id?: string
    headline: string
    bio: string
    hourlyRate: number
    specialties?: TutorProfileCreatespecialtiesInput | string[]
    courses?: CourseCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    headline: string
    bio: string
    hourlyRate: number
    specialties?: TutorProfileCreatespecialtiesInput | string[]
    courses?: CourseUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutUserInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateWithoutUserInput = {
    enrolledAt?: Date | string
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    courseId: string
    enrolledAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikedCourseCreateWithoutUserInput = {
    likedAt?: Date | string
    course: CourseCreateNestedOneWithoutLikedByInput
  }

  export type LikedCourseUncheckedCreateWithoutUserInput = {
    courseId: string
    likedAt?: Date | string
  }

  export type LikedCourseCreateOrConnectWithoutUserInput = {
    where: LikedCourseWhereUniqueInput
    create: XOR<LikedCourseCreateWithoutUserInput, LikedCourseUncheckedCreateWithoutUserInput>
  }

  export type LikedCourseCreateManyUserInputEnvelope = {
    data: LikedCourseCreateManyUserInput | LikedCourseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutAspirantInput = {
    id?: string
    sessionDate: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor: UserCreateNestedOneWithoutBookingsAsTutorInput
  }

  export type BookingUncheckedCreateWithoutAspirantInput = {
    id?: string
    sessionDate: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorId: string
  }

  export type BookingCreateOrConnectWithoutAspirantInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutAspirantInput, BookingUncheckedCreateWithoutAspirantInput>
  }

  export type BookingCreateManyAspirantInputEnvelope = {
    data: BookingCreateManyAspirantInput | BookingCreateManyAspirantInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutTutorInput = {
    id?: string
    sessionDate: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aspirant: UserCreateNestedOneWithoutBookingsAsAspirantInput
  }

  export type BookingUncheckedCreateWithoutTutorInput = {
    id?: string
    sessionDate: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aspirantId: string
  }

  export type BookingCreateOrConnectWithoutTutorInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTutorInput, BookingUncheckedCreateWithoutTutorInput>
  }

  export type BookingCreateManyTutorInputEnvelope = {
    data: BookingCreateManyTutorInput | BookingCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type AspirantProfileUpsertWithoutUserInput = {
    update: XOR<AspirantProfileUpdateWithoutUserInput, AspirantProfileUncheckedUpdateWithoutUserInput>
    create: XOR<AspirantProfileCreateWithoutUserInput, AspirantProfileUncheckedCreateWithoutUserInput>
    where?: AspirantProfileWhereInput
  }

  export type AspirantProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: AspirantProfileWhereInput
    data: XOR<AspirantProfileUpdateWithoutUserInput, AspirantProfileUncheckedUpdateWithoutUserInput>
  }

  export type AspirantProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: AspirantProfileUpdateinterestsInput | string[]
    skills?: AspirantProfileUpdateskillsInput | string[]
    learningGoals?: AspirantProfileUpdatelearningGoalsInput | string[]
  }

  export type AspirantProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    interests?: AspirantProfileUpdateinterestsInput | string[]
    skills?: AspirantProfileUpdateskillsInput | string[]
    learningGoals?: AspirantProfileUpdatelearningGoalsInput | string[]
  }

  export type TutorProfileUpsertWithoutUserInput = {
    update: XOR<TutorProfileUpdateWithoutUserInput, TutorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutUserInput, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type TutorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    hourlyRate?: IntFieldUpdateOperationsInput | number
    specialties?: TutorProfileUpdatespecialtiesInput | string[]
    courses?: CourseUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    hourlyRate?: IntFieldUpdateOperationsInput | number
    specialties?: TutorProfileUpdatespecialtiesInput | string[]
    courses?: CourseUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
  }

  export type LikedCourseUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedCourseWhereUniqueInput
    update: XOR<LikedCourseUpdateWithoutUserInput, LikedCourseUncheckedUpdateWithoutUserInput>
    create: XOR<LikedCourseCreateWithoutUserInput, LikedCourseUncheckedCreateWithoutUserInput>
  }

  export type LikedCourseUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedCourseWhereUniqueInput
    data: XOR<LikedCourseUpdateWithoutUserInput, LikedCourseUncheckedUpdateWithoutUserInput>
  }

  export type LikedCourseUpdateManyWithWhereWithoutUserInput = {
    where: LikedCourseScalarWhereInput
    data: XOR<LikedCourseUpdateManyMutationInput, LikedCourseUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedCourseScalarWhereInput = {
    AND?: LikedCourseScalarWhereInput | LikedCourseScalarWhereInput[]
    OR?: LikedCourseScalarWhereInput[]
    NOT?: LikedCourseScalarWhereInput | LikedCourseScalarWhereInput[]
    userId?: StringFilter<"LikedCourse"> | string
    courseId?: StringFilter<"LikedCourse"> | string
    likedAt?: DateTimeFilter<"LikedCourse"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutAspirantInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutAspirantInput, BookingUncheckedUpdateWithoutAspirantInput>
    create: XOR<BookingCreateWithoutAspirantInput, BookingUncheckedCreateWithoutAspirantInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutAspirantInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutAspirantInput, BookingUncheckedUpdateWithoutAspirantInput>
  }

  export type BookingUpdateManyWithWhereWithoutAspirantInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutAspirantInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    sessionDate?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    aspirantId?: StringFilter<"Booking"> | string
    tutorId?: StringFilter<"Booking"> | string
  }

  export type BookingUpsertWithWhereUniqueWithoutTutorInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTutorInput, BookingUncheckedUpdateWithoutTutorInput>
    create: XOR<BookingCreateWithoutTutorInput, BookingUncheckedCreateWithoutTutorInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTutorInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTutorInput, BookingUncheckedUpdateWithoutTutorInput>
  }

  export type BookingUpdateManyWithWhereWithoutTutorInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTutorInput>
  }

  export type UserCreateWithoutAspirantProfileInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    likedCourses?: LikedCourseCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingCreateNestedManyWithoutAspirantInput
    bookingsAsTutor?: BookingCreateNestedManyWithoutTutorInput
  }

  export type UserUncheckedCreateWithoutAspirantProfileInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    likedCourses?: LikedCourseUncheckedCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingUncheckedCreateNestedManyWithoutAspirantInput
    bookingsAsTutor?: BookingUncheckedCreateNestedManyWithoutTutorInput
  }

  export type UserCreateOrConnectWithoutAspirantProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAspirantProfileInput, UserUncheckedCreateWithoutAspirantProfileInput>
  }

  export type UserUpsertWithoutAspirantProfileInput = {
    update: XOR<UserUpdateWithoutAspirantProfileInput, UserUncheckedUpdateWithoutAspirantProfileInput>
    create: XOR<UserCreateWithoutAspirantProfileInput, UserUncheckedCreateWithoutAspirantProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAspirantProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAspirantProfileInput, UserUncheckedUpdateWithoutAspirantProfileInput>
  }

  export type UserUpdateWithoutAspirantProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    likedCourses?: LikedCourseUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUpdateManyWithoutAspirantNestedInput
    bookingsAsTutor?: BookingUpdateManyWithoutTutorNestedInput
  }

  export type UserUncheckedUpdateWithoutAspirantProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    likedCourses?: LikedCourseUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUncheckedUpdateManyWithoutAspirantNestedInput
    bookingsAsTutor?: BookingUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type UserCreateWithoutTutorProfileInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    likedCourses?: LikedCourseCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingCreateNestedManyWithoutAspirantInput
    bookingsAsTutor?: BookingCreateNestedManyWithoutTutorInput
  }

  export type UserUncheckedCreateWithoutTutorProfileInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    likedCourses?: LikedCourseUncheckedCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingUncheckedCreateNestedManyWithoutAspirantInput
    bookingsAsTutor?: BookingUncheckedCreateNestedManyWithoutTutorInput
  }

  export type UserCreateOrConnectWithoutTutorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
  }

  export type CourseCreateWithoutTutorInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    likedBy?: LikedCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTutorInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    likedBy?: LikedCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTutorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTutorInput, CourseUncheckedCreateWithoutTutorInput>
  }

  export type CourseCreateManyTutorInputEnvelope = {
    data: CourseCreateManyTutorInput | CourseCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTutorProfileInput = {
    update: XOR<UserUpdateWithoutTutorProfileInput, UserUncheckedUpdateWithoutTutorProfileInput>
    create: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTutorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTutorProfileInput, UserUncheckedUpdateWithoutTutorProfileInput>
  }

  export type UserUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    likedCourses?: LikedCourseUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUpdateManyWithoutAspirantNestedInput
    bookingsAsTutor?: BookingUpdateManyWithoutTutorNestedInput
  }

  export type UserUncheckedUpdateWithoutTutorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    likedCourses?: LikedCourseUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUncheckedUpdateManyWithoutAspirantNestedInput
    bookingsAsTutor?: BookingUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type CourseUpsertWithWhereUniqueWithoutTutorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutTutorInput, CourseUncheckedUpdateWithoutTutorInput>
    create: XOR<CourseCreateWithoutTutorInput, CourseUncheckedCreateWithoutTutorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutTutorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutTutorInput, CourseUncheckedUpdateWithoutTutorInput>
  }

  export type CourseUpdateManyWithWhereWithoutTutorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutTutorInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    tutorId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type TutorProfileCreateWithoutCoursesInput = {
    id?: string
    headline: string
    bio: string
    hourlyRate: number
    specialties?: TutorProfileCreatespecialtiesInput | string[]
    user: UserCreateNestedOneWithoutTutorProfileInput
  }

  export type TutorProfileUncheckedCreateWithoutCoursesInput = {
    id?: string
    userId: string
    headline: string
    bio: string
    hourlyRate: number
    specialties?: TutorProfileCreatespecialtiesInput | string[]
  }

  export type TutorProfileCreateOrConnectWithoutCoursesInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutCoursesInput, TutorProfileUncheckedCreateWithoutCoursesInput>
  }

  export type EnrollmentCreateWithoutCourseInput = {
    enrolledAt?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    userId: string
    enrolledAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type LikedCourseCreateWithoutCourseInput = {
    likedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedCoursesInput
  }

  export type LikedCourseUncheckedCreateWithoutCourseInput = {
    userId: string
    likedAt?: Date | string
  }

  export type LikedCourseCreateOrConnectWithoutCourseInput = {
    where: LikedCourseWhereUniqueInput
    create: XOR<LikedCourseCreateWithoutCourseInput, LikedCourseUncheckedCreateWithoutCourseInput>
  }

  export type LikedCourseCreateManyCourseInputEnvelope = {
    data: LikedCourseCreateManyCourseInput | LikedCourseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type TutorProfileUpsertWithoutCoursesInput = {
    update: XOR<TutorProfileUpdateWithoutCoursesInput, TutorProfileUncheckedUpdateWithoutCoursesInput>
    create: XOR<TutorProfileCreateWithoutCoursesInput, TutorProfileUncheckedCreateWithoutCoursesInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutCoursesInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutCoursesInput, TutorProfileUncheckedUpdateWithoutCoursesInput>
  }

  export type TutorProfileUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    hourlyRate?: IntFieldUpdateOperationsInput | number
    specialties?: TutorProfileUpdatespecialtiesInput | string[]
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    hourlyRate?: IntFieldUpdateOperationsInput | number
    specialties?: TutorProfileUpdatespecialtiesInput | string[]
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type LikedCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: LikedCourseWhereUniqueInput
    update: XOR<LikedCourseUpdateWithoutCourseInput, LikedCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<LikedCourseCreateWithoutCourseInput, LikedCourseUncheckedCreateWithoutCourseInput>
  }

  export type LikedCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: LikedCourseWhereUniqueInput
    data: XOR<LikedCourseUpdateWithoutCourseInput, LikedCourseUncheckedUpdateWithoutCourseInput>
  }

  export type LikedCourseUpdateManyWithWhereWithoutCourseInput = {
    where: LikedCourseScalarWhereInput
    data: XOR<LikedCourseUpdateManyMutationInput, LikedCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type UserCreateWithoutEnrollmentsInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileCreateNestedOneWithoutUserInput
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    likedCourses?: LikedCourseCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingCreateNestedManyWithoutAspirantInput
    bookingsAsTutor?: BookingCreateNestedManyWithoutTutorInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileUncheckedCreateNestedOneWithoutUserInput
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    likedCourses?: LikedCourseUncheckedCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingUncheckedCreateNestedManyWithoutAspirantInput
    bookingsAsTutor?: BookingUncheckedCreateNestedManyWithoutTutorInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor: TutorProfileCreateNestedOneWithoutCoursesInput
    likedBy?: LikedCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description: string
    tutorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedBy?: LikedCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUpdateOneWithoutUserNestedInput
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    likedCourses?: LikedCourseUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUpdateManyWithoutAspirantNestedInput
    bookingsAsTutor?: BookingUpdateManyWithoutTutorNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUncheckedUpdateOneWithoutUserNestedInput
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    likedCourses?: LikedCourseUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUncheckedUpdateManyWithoutAspirantNestedInput
    bookingsAsTutor?: BookingUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type CourseUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: TutorProfileUpdateOneRequiredWithoutCoursesNestedInput
    likedBy?: LikedCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikedCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutLikedCoursesInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileCreateNestedOneWithoutUserInput
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingCreateNestedManyWithoutAspirantInput
    bookingsAsTutor?: BookingCreateNestedManyWithoutTutorInput
  }

  export type UserUncheckedCreateWithoutLikedCoursesInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileUncheckedCreateNestedOneWithoutUserInput
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingUncheckedCreateNestedManyWithoutAspirantInput
    bookingsAsTutor?: BookingUncheckedCreateNestedManyWithoutTutorInput
  }

  export type UserCreateOrConnectWithoutLikedCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedCoursesInput, UserUncheckedCreateWithoutLikedCoursesInput>
  }

  export type CourseCreateWithoutLikedByInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor: TutorProfileCreateNestedOneWithoutCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutLikedByInput = {
    id?: string
    title: string
    description: string
    tutorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutLikedByInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutLikedByInput, CourseUncheckedCreateWithoutLikedByInput>
  }

  export type UserUpsertWithoutLikedCoursesInput = {
    update: XOR<UserUpdateWithoutLikedCoursesInput, UserUncheckedUpdateWithoutLikedCoursesInput>
    create: XOR<UserCreateWithoutLikedCoursesInput, UserUncheckedCreateWithoutLikedCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedCoursesInput, UserUncheckedUpdateWithoutLikedCoursesInput>
  }

  export type UserUpdateWithoutLikedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUpdateOneWithoutUserNestedInput
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUpdateManyWithoutAspirantNestedInput
    bookingsAsTutor?: BookingUpdateManyWithoutTutorNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUncheckedUpdateOneWithoutUserNestedInput
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUncheckedUpdateManyWithoutAspirantNestedInput
    bookingsAsTutor?: BookingUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type CourseUpsertWithoutLikedByInput = {
    update: XOR<CourseUpdateWithoutLikedByInput, CourseUncheckedUpdateWithoutLikedByInput>
    create: XOR<CourseCreateWithoutLikedByInput, CourseUncheckedCreateWithoutLikedByInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutLikedByInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutLikedByInput, CourseUncheckedUpdateWithoutLikedByInput>
  }

  export type CourseUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: TutorProfileUpdateOneRequiredWithoutCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutBookingsAsAspirantInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileCreateNestedOneWithoutUserInput
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    likedCourses?: LikedCourseCreateNestedManyWithoutUserInput
    bookingsAsTutor?: BookingCreateNestedManyWithoutTutorInput
  }

  export type UserUncheckedCreateWithoutBookingsAsAspirantInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileUncheckedCreateNestedOneWithoutUserInput
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    likedCourses?: LikedCourseUncheckedCreateNestedManyWithoutUserInput
    bookingsAsTutor?: BookingUncheckedCreateNestedManyWithoutTutorInput
  }

  export type UserCreateOrConnectWithoutBookingsAsAspirantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsAsAspirantInput, UserUncheckedCreateWithoutBookingsAsAspirantInput>
  }

  export type UserCreateWithoutBookingsAsTutorInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileCreateNestedOneWithoutUserInput
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    likedCourses?: LikedCourseCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingCreateNestedManyWithoutAspirantInput
  }

  export type UserUncheckedCreateWithoutBookingsAsTutorInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    aspirantProfile?: AspirantProfileUncheckedCreateNestedOneWithoutUserInput
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    likedCourses?: LikedCourseUncheckedCreateNestedManyWithoutUserInput
    bookingsAsAspirant?: BookingUncheckedCreateNestedManyWithoutAspirantInput
  }

  export type UserCreateOrConnectWithoutBookingsAsTutorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsAsTutorInput, UserUncheckedCreateWithoutBookingsAsTutorInput>
  }

  export type UserUpsertWithoutBookingsAsAspirantInput = {
    update: XOR<UserUpdateWithoutBookingsAsAspirantInput, UserUncheckedUpdateWithoutBookingsAsAspirantInput>
    create: XOR<UserCreateWithoutBookingsAsAspirantInput, UserUncheckedCreateWithoutBookingsAsAspirantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsAsAspirantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsAsAspirantInput, UserUncheckedUpdateWithoutBookingsAsAspirantInput>
  }

  export type UserUpdateWithoutBookingsAsAspirantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUpdateOneWithoutUserNestedInput
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    likedCourses?: LikedCourseUpdateManyWithoutUserNestedInput
    bookingsAsTutor?: BookingUpdateManyWithoutTutorNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsAsAspirantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUncheckedUpdateOneWithoutUserNestedInput
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    likedCourses?: LikedCourseUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsTutor?: BookingUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type UserUpsertWithoutBookingsAsTutorInput = {
    update: XOR<UserUpdateWithoutBookingsAsTutorInput, UserUncheckedUpdateWithoutBookingsAsTutorInput>
    create: XOR<UserCreateWithoutBookingsAsTutorInput, UserUncheckedCreateWithoutBookingsAsTutorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsAsTutorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsAsTutorInput, UserUncheckedUpdateWithoutBookingsAsTutorInput>
  }

  export type UserUpdateWithoutBookingsAsTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUpdateOneWithoutUserNestedInput
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    likedCourses?: LikedCourseUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUpdateManyWithoutAspirantNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsAsTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aspirantProfile?: AspirantProfileUncheckedUpdateOneWithoutUserNestedInput
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    likedCourses?: LikedCourseUncheckedUpdateManyWithoutUserNestedInput
    bookingsAsAspirant?: BookingUncheckedUpdateManyWithoutAspirantNestedInput
  }

  export type EnrollmentCreateManyUserInput = {
    courseId: string
    enrolledAt?: Date | string
  }

  export type LikedCourseCreateManyUserInput = {
    courseId: string
    likedAt?: Date | string
  }

  export type BookingCreateManyAspirantInput = {
    id?: string
    sessionDate: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorId: string
  }

  export type BookingCreateManyTutorInput = {
    id?: string
    sessionDate: Date | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    aspirantId: string
  }

  export type EnrollmentUpdateWithoutUserInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedCourseUpdateWithoutUserInput = {
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type LikedCourseUncheckedUpdateWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedCourseUncheckedUpdateManyWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutAspirantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: UserUpdateOneRequiredWithoutBookingsAsTutorNestedInput
  }

  export type BookingUncheckedUpdateWithoutAspirantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUncheckedUpdateManyWithoutAspirantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUpdateWithoutTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aspirant?: UserUpdateOneRequiredWithoutBookingsAsAspirantNestedInput
  }

  export type BookingUncheckedUpdateWithoutTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aspirantId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUncheckedUpdateManyWithoutTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aspirantId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateManyTutorInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    likedBy?: LikedCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    likedBy?: LikedCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyCourseInput = {
    userId: string
    enrolledAt?: Date | string
  }

  export type LikedCourseCreateManyCourseInput = {
    userId: string
    likedAt?: Date | string
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedCourseUpdateWithoutCourseInput = {
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedCoursesNestedInput
  }

  export type LikedCourseUncheckedUpdateWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedCourseUncheckedUpdateManyWithoutCourseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
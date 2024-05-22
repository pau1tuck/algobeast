// UtilityTypes.ts - TypeScript utility types examples
// Example interface to use with utility types
interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

// Partial<Type> - Makes all properties of Type optional.
const partialUser: Partial<User> = { name: "John" };

// Readonly<Type> - Makes all properties of Type read-only.
const readonlyUser: Readonly<User> = { id: 1, name: "John", age: 30, email: "john@example.com" };

// Record<Keys, Type> - Constructs an object type with a set of properties Keys of type Type.
const usersById: Record<number, User> = {
    1: { id: 1, name: "John", age: 30, email: "john@example.com" },
    2: { id: 2, name: "Jane", age: 25, email: "jane@example.com" }
};

// Pick<Type, Keys> - Picks a set of properties from Type.
const simpleUser: Pick<User, "name" | "email"> = { name: "John", email: "john@example.com" };

// Omit<Type, Keys> - Constructs a type by picking all properties from Type and then removing Keys.
const userWithoutEmail: Omit<User, "email"> = { id: 1, name: "John", age: 30 };

// Exclude<Type, ExcludedUnion> - Excludes from Type all union members that are assignable to ExcludedUnion.
type NumericOrString = number | string;
type JustNumeric = Exclude<NumericOrString, string>;

// Extract<Type, Union> - Extracts from Type all union members that are assignable to Union.
type JustString = Extract<NumericOrString, string>;

// NonNullable<Type> - Excludes null and undefined from Type.
type ValidString = NonNullable<string | null | undefined>;

// Parameters<Type> - Obtains the parameters of a function type in a tuple.
type FunctionParams = Parameters<(name: string, age: number) => void>;

// ReturnType<Type> - Obtains the return type of a function type.
type SomeFunctionResult = ReturnType<() => JustString>;

// InstanceType<Type> - Obtains the instance type of a constructor function type.
class Person { constructor(public name: string) {} }
type PersonInstance = InstanceType<typeof Person>;

// Utility types can be nested and combined to create complex type transformations.
const complexObject: Readonly<Partial<Pick<User, "name" | "age">>> = { name: "John" };

// Display the use of these types:
console.log(partialUser, readonlyUser, usersById, simpleUser, userWithoutEmail, complexObject);

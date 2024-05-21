import { v4 as uuid } from "uuid";
import { IResolvers } from "@graphql-tools/utils";
import "reflect-metadata";

// @/entity/user.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    BaseEntity,
} from "typeorm";

// @/config/database.config.ts
const dataSource = new DataSource({
    type: "postgres",
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    username: env.DB_USER,
    password: env.DB_PASS,
    synchronize: true,
    logging: !env.PRODUCTION,
    logger: "advanced-console",
    entities: [User, Track],
    migrations: [],
    subscribers: [],
    ssl: true,
});

// Initialize TypeOrm if database configuration exists:
dataSource
    .initialize()
    .then(async () => {
        console.log(
            `Database ${env.DB_NAME} initialized on ${env.DB_HOST}:${env.DB_PORT}.`,
        );
    })
    .catch(error => console.log(error));

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ nullable: true })
    facebookId?: string;

    @Column({ nullable: true })
    googleId?: string;

    @Column({ nullable: true })
    twitterId?: string;

    @Column({ length: 128, nullable: true })
    givenName?: string;

    @Column({ length: 128, nullable: true })
    familyName?: string;

    @Column({ length: 128, nullable: true })
    city?: string;

    @Column({ length: 128, nullable: true })
    country?: string;

    @Column({ nullable: true })
    avatar?: string;

    @Column({ unique: true, nullable: true })
    email?: string;

    @Column({ unique: true, nullable: true })
    password?: string;

    @Column({ default: false })
    verified!: boolean;

    @Column("simple-array", { default: [] })
    roles?: string[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}

const createUserResolver: IResolvers = {
    Mutation: {
        createUser: async (_, args) => {
            try {
                const { input } = args;

                // Create a new instance of the User entity
                const user = new User();

                // Generate a UUID for the user ID
                user.id = uuid();

                // Set the required user properties from the input arguments
                user.givenName = input.givenName;
                user.familyName = input.familyName;
                user.city = input.city;
                user.country = input.country;
                user.email = input.email;
                user.password = input.password;

                // Save the user entity to the database
                await user.save();

                return user;
            } catch (error) {
                throw new Error("Failed to create new user.");
            }
        },
    },
};

export default createUserResolver;

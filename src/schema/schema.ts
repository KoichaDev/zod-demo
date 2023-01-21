import { z } from 'zod';

const hobbies = ['Programming', 'Weight Lifting', 'Guitar'] as const;

// enum EnumHobbies {
// 'Programming',
// 'Weight Lifting',
// 'Guitar',
// }

const UserSchema = z
	.object({
		username: z.string().min(3),
		age: z.number().gt(0),
		birthday: z.date(),
		isProgrammer: z.boolean(),
		hobby: z.enum(hobbies),
	})
	// .partial();
	// .omit({ age: true });
	// .extend({ name: z.string() });
	.merge(z.object({ name: z.string() }));

type UserType = z.infer<typeof UserSchema>;

// const user = {
// 	username: 'Wds',
// 	age: 20,
// 	birthday: new Date(),
// 	isProgrammer: false,
// 	hobby: 'Programming',
// };

const user = {
	username: 'Wds',
};

// console.log(UserSchema.parse(user));

// Partial works perfectly good for example multi-step form
console.log(UserSchema.partial().parse(user));

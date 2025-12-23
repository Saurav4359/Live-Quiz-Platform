import mongoose, { Document, Types } from "mongoose";
export interface Iuser extends Document {
    name: string;
    email: string;
    password: string;
    role: "teacher" | "student";
}
export declare const users: mongoose.Model<Iuser, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, Iuser, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iuser & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<Iuser, mongoose.Model<Iuser, any, any, any, mongoose.Document<unknown, any, Iuser, any, mongoose.DefaultSchemaOptions> & Iuser & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any, Iuser>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Iuser, mongoose.Document<unknown, {}, Iuser, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iuser & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<Types.ObjectId, Iuser, mongoose.Document<unknown, {}, Iuser, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iuser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    name?: mongoose.SchemaDefinitionProperty<string, Iuser, mongoose.Document<unknown, {}, Iuser, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iuser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    email?: mongoose.SchemaDefinitionProperty<string, Iuser, mongoose.Document<unknown, {}, Iuser, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iuser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    password?: mongoose.SchemaDefinitionProperty<string, Iuser, mongoose.Document<unknown, {}, Iuser, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iuser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    role?: mongoose.SchemaDefinitionProperty<"teacher" | "student", Iuser, mongoose.Document<unknown, {}, Iuser, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iuser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Iuser>, Iuser>;
export interface Iclass extends Document {
    className: string;
    teacherId: Types.ObjectId;
    studentIds: Types.ObjectId[];
}
export declare const classes: mongoose.Model<Iclass, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, Iclass, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iclass & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<Iclass, mongoose.Model<Iclass, any, any, any, mongoose.Document<unknown, any, Iclass, any, mongoose.DefaultSchemaOptions> & Iclass & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any, Iclass>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Iclass, mongoose.Document<unknown, {}, Iclass, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iclass & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<Types.ObjectId, Iclass, mongoose.Document<unknown, {}, Iclass, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iclass & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    className?: mongoose.SchemaDefinitionProperty<string, Iclass, mongoose.Document<unknown, {}, Iclass, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iclass & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    teacherId?: mongoose.SchemaDefinitionProperty<Types.ObjectId, Iclass, mongoose.Document<unknown, {}, Iclass, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iclass & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    studentIds?: mongoose.SchemaDefinitionProperty<Types.ObjectId[], Iclass, mongoose.Document<unknown, {}, Iclass, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iclass & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Iclass>, Iclass>;
export interface Iattendance extends Document {
    classId: Types.ObjectId;
    studentId: Types.ObjectId;
    status: "present" | "absent";
}
export declare const attendance: mongoose.Model<Iattendance, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, Iattendance, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iattendance & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<Iattendance, mongoose.Model<Iattendance, any, any, any, mongoose.Document<unknown, any, Iattendance, any, mongoose.DefaultSchemaOptions> & Iattendance & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any, Iattendance>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Iattendance, mongoose.Document<unknown, {}, Iattendance, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iattendance & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<Types.ObjectId, Iattendance, mongoose.Document<unknown, {}, Iattendance, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iattendance & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    classId?: mongoose.SchemaDefinitionProperty<Types.ObjectId, Iattendance, mongoose.Document<unknown, {}, Iattendance, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iattendance & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    studentId?: mongoose.SchemaDefinitionProperty<Types.ObjectId, Iattendance, mongoose.Document<unknown, {}, Iattendance, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iattendance & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    status?: mongoose.SchemaDefinitionProperty<"present" | "absent", Iattendance, mongoose.Document<unknown, {}, Iattendance, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Iattendance & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Iattendance>, Iattendance>;
//# sourceMappingURL=Schema.d.ts.map
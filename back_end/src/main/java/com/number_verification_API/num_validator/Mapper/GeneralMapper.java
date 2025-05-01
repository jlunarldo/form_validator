package com.number_verification_API.num_validator.Mapper;

import com.google.gson.Gson;

public class GeneralMapper {
    private GeneralMapper(){

    }

    public static <D> D mapper(Class<D> destiny, Object origin){

        if(origin==null){
            return null;
        }
        Gson gson = new Gson();
        return gson.fromJson(gson.toJson(origin),destiny);

    }
}

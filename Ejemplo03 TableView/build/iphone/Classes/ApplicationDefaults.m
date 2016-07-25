/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 * WARNING: This is generated code. Do not modify. Your changes *will* be lost.
 */

#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"

@implementation ApplicationDefaults

+ (NSMutableDictionary*) copyDefaults
{
	NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];
	
	[_property setObject:[TiUtils stringValue:@"5JXKvdgWAd6vpXqkgw8ym1F9wVO8hkdv"] forKey:@"acs-oauth-secret-production"];
	[_property setObject:[TiUtils stringValue:@"iSDslZEHXE4ZIy4dUcNLjx6jaiPXdDE6"] forKey:@"acs-oauth-key-production"];
	[_property setObject:[TiUtils stringValue:@"Fo42HrKMttcLdesuCojnrHNDzphkegEt"] forKey:@"acs-api-key-production"];
	[_property setObject:[TiUtils stringValue:@"EZAnn0VcZw6xorDZMihCaaRszd5gjCmD"] forKey:@"acs-oauth-secret-development"];
	[_property setObject:[TiUtils stringValue:@"35fcbjKjc9VQiVDbqTI0faSnCgPMZcaS"] forKey:@"acs-oauth-key-development"];
	[_property setObject:[TiUtils stringValue:@"ClflroDo37z722ZtUUYEhqNHfgMnnZFm"] forKey:@"acs-api-key-development"];
	[_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];
	return _property;
}

+ (NSDictionary*) launchUrl {
    static BOOL launched = NO;
    if (!launched) {
        launched = YES;
        return nil;
    } else { return nil;}
}
 
@end
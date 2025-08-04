USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnDocumentContainer]    Script Date: 01/11/2024 5:22:40 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS(select * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.TABLES  where  TABLE_NAME='trnDocumentContainer_History')
BEGIN
	DROP TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].[trnDocumentContainer_History]
END
GO
CREATE TABLE [dbo].[trnDocumentContainer_History](
	[trnDocumentContainer_HistoryID] [int] IDENTITY(1,1) NOT NULL,
	[trnDocumentContainerID] [int]  NOT NULL,
	[trnDocumentID] [int] NOT NULL,
	[ContainerNumber] [varchar](11) NULL,
	[ISOCodeID] [int] NULL,
	[ISOCode] [varchar](255) NULL,
	[ISOCodeSize] [varchar](255) NULL,
	[ISOCodeType] [varchar](255) NULL,
	[NatureofCargoID] [int] NULL,
	[NatureofCargoName] [varchar](255) NULL,
	[PackageTypeID] [int] NULL,
	[PackageType] [varchar](255) NULL,
	[BillCommodityID] [int] NULL,
	[BillCommodity] [varchar](255) NULL,
	[SubCommodityID] [int] NULL,
	[SubCommodityName] [varchar](255) NULL,
	[IsBulkForContainer] [bit] NULL,
	[NoOfPackageForContainer] [decimal](10, 2) NULL,
	[WeightForContainer] [decimal](10, 2) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[NoOfPiecesForContainer] [decimal](10, 2) NULL,
	[GroupCommodityID] [int] NULL,
	[GroupCommodity] [varchar](255) NULL,
	[InType] [varchar](255) NULL,
	[DeliveryMode] [varchar](255) NULL,
	[IMO] [int] NULL,
	[UN] [int] NULL,
	[TEMP] [int] NULL,
	[DoNO] [varchar](255) NULL,
	[DoDate] [datetime] NULL,
	[SealNo] [varchar](255) NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnDocumentContainer_History] ADD  CONSTRAINT [DF_trnDocumentContainer_trnDocumentID]  DEFAULT ((0)) FOR [trnDocumentID]
GO

ALTER TABLE [dbo].[trnDocumentContainer_History] ADD  CONSTRAINT [DF_trnDocumentContainer_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnDocumentContainer_History] ADD  CONSTRAINT [DF_trnDocumentContainer_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


